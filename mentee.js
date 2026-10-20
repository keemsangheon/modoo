import {
  getDataFromGoogleDrive,
  writeMultipleDataToGoogleDrive,
} from "./utils/getDataFromGoogleDrive";

const SHEET_ID = "1J2aU90t4ELXiPDSVhATR-8zBh11N29F2fywKpvf9LBQ";
const RAW_SHEET = "[RAW] 활동보고서";
const RESULT_SHEET = "[멘티] 멘토링_출결";

// 출석 = 보강 > 결석 > 무단결석
function getPriority(currentStatus, newStatus) {
  if (!currentStatus) {
    return newStatus;
  }
  const priority = {
    출석: 3,
    보강: 3,
    결석: 1,
    무단결석: 0,
  };

  return (priority[newStatus] ?? -1) > (priority[currentStatus] ?? -1)
    ? newStatus
    : currentStatus;
}

function columnLetterToNumber(columnLetter) {
  columnLetter = columnLetter.toUpperCase();
  let result = 0;
  for (let i = 0; i < columnLetter.length; i++) {
    result = result * 26 + (columnLetter.charCodeAt(i) - 64);
  }
  return result - 1;
}

async function getRawData() {
  const rawData = await getDataFromGoogleDrive(SHEET_ID, RAW_SHEET);
  return rawData.slice(1);
}

async function getConfirmData() {
  return await getDataFromGoogleDrive(SHEET_ID, RESULT_SHEET);
}

async function writeDataToGoogleConfirmSheet(data) {
  await writeMultipleDataToGoogleDrive(SHEET_ID, RESULT_SHEET, data);
}

// RAW 한 행(= 특정 멘토의 특정 주차 보고서)에서 멘티 이름이 매칭되는
// 세트만 골라 우선순위 기반으로 최종 상태를 반환한다.
// 세트 배치: J열(이름)부터 6칸 간격 — 이름 / 진행사항 / 수업시간 / 수업진행 일자 / 시작시간 / 종료시간
function processStudentData(item, 멘티_이름) {
  const startColumn = "J";
  let currentIndex = columnLetterToNumber(startColumn);

  let data = null;

  while (currentIndex < item.length) {
    const studentName = item[currentIndex];

    if (studentName === "" || studentName === undefined) {
      break;
    }

    if (studentName === 멘티_이름) {
      const newStatus = item[currentIndex + 1];
      const currentStatus = data?.진행사항;
      const status = getPriority(currentStatus, newStatus);

      if (currentStatus !== status) {
        data = {
          진행사항: status,
          수업시간: item[currentIndex + 2],
          참여일자: item[currentIndex + 3],
          시작시간: item[currentIndex + 4],
          종료시간: item[currentIndex + 5],
        };
      }
    }

    currentIndex += 6;
  }

  return data;
}

// 동명이인은 무시하고 멘티 이름 + 주차만으로 매칭한다.
// 여러 멘토의 보고서에 같은 이름이 등장하면 우선순위로 병합한다.
function findMentoringData(rawData, 멘티_이름, 주차_이름) {
  let merged = null;

  for (const item of rawData) {
    if (item[0] !== 주차_이름) continue;
    const found = processStudentData(item, 멘티_이름);
    if (!found) continue;

    if (!merged) {
      merged = found;
    } else {
      const next = getPriority(merged.진행사항, found.진행사항);
      if (next !== merged.진행사항) {
        merged = found;
      }
    }
  }

  return merged;
}

async function main() {
  const rawData = await getRawData();
  const confirmData = await getConfirmData();

  const 확인필요_행 = confirmData[0];
  const 주차_행 = confirmData[1];

  const 확인필요한_인덱스 = 확인필요_행.reduce((acc, v, i) => {
    if (v === "확인필요") acc.push(i);
    return acc;
  }, []);

  if (확인필요한_인덱스.length === 0) {
    console.log("확인필요 마킹된 주차 컬럼이 없습니다.");
    return;
  }

  const asyncTask = [];

  for (const 주차_인덱스 of 확인필요한_인덱스) {
    const 주차 = 주차_행[주차_인덱스];

    for (let i = 2; i < confirmData.length; i++) {
      const row = confirmData[i];
      const 멘티_이름 = row[1];
      if (!멘티_이름) continue;

      const result = findMentoringData(rawData, 멘티_이름, 주차);

      let type;
      if (result) {
        type =
          result.진행사항 === "출석" || result.진행사항 === "보강"
            ? "O"
            : result.진행사항;
      } else {
        type = "미제출";
      }

      asyncTask.push({
        rowIndex: i,
        columnIndex: 주차_인덱스,
        value: type,
      });
    }
  }

  console.log(JSON.stringify(asyncTask));

  await writeDataToGoogleConfirmSheet(asyncTask);
}

main();
