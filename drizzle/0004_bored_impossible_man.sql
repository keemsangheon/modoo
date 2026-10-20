CREATE TABLE `invitations` (
	`team` text PRIMARY KEY NOT NULL,
	`salt` text NOT NULL,
	`hash` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `participants` (
	`id` text PRIMARY KEY NOT NULL,
	`team` text NOT NULL,
	`name` text NOT NULL,
	`role` text NOT NULL,
	`salt` text NOT NULL,
	`hash` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `participant_team_role` ON `participants` (`team`,`role`);--> statement-breakpoint
CREATE UNIQUE INDEX `participant_team_name` ON `participants` (`team`,`name`);--> statement-breakpoint
ALTER TABLE `sessions` ADD `participant` text;