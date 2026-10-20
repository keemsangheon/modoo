CREATE TABLE `monthly_scores` (
	`team` text NOT NULL,
	`month` text NOT NULL,
	`mentor` integer DEFAULT 0 NOT NULL,
	`mentee` integer DEFAULT 0 NOT NULL,
	`mentor_played` integer DEFAULT 0 NOT NULL,
	`mentee_played` integer DEFAULT 0 NOT NULL,
	PRIMARY KEY(`team`, `month`)
);

--> statement-breakpoint
INSERT INTO monthly_scores(team,month,mentor,mentee,mentor_played,mentee_played)
SELECT id,strftime('%Y-%m','now','+9 hours'),mentor,mentee,MAX(mentor_played,mentor>0),MAX(mentee_played,mentee>0) FROM teams;
