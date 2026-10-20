import type {Metadata} from 'next';
export const metadata:Metadata={title:'모두의 멘토링 · 30초 팀 챌린지',description:'멘토와 멘티가 각자의 기기에서 함께 만드는 우리 팀 기록.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
