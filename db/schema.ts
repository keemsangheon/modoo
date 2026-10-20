import { sqliteTable, text, integer, primaryKey, uniqueIndex } from 'drizzle-orm/sqlite-core';
export const teams=sqliteTable('teams',{id:text('id').primaryKey(),name:text('name').notNull().unique(),salt:text('salt').notNull(),hash:text('hash').notNull(),mentor:integer('mentor').notNull().default(0),mentorPlayed:integer('mentor_played').notNull().default(0),menteePlayed:integer('mentee_played').notNull().default(0),mentee:integer('mentee').notNull().default(0),created:integer('created').notNull()});
export const sessions=sqliteTable('sessions',{token:text('token').primaryKey(),team:text('team').notNull(),expires:integer('expires').notNull(),role:text('role'),participant:text('participant')});
export const rounds=sqliteTable('rounds',{id:text('id').primaryKey(),token:text('token').notNull(),team:text('team').notNull(),role:text('role').notNull(),started:integer('started').notNull(),score:integer('score')});
export const limits=sqliteTable('limits',{key:text('key').primaryKey(),count:integer('count').notNull(),reset:integer('reset').notNull()});

export const monthlyScores=sqliteTable('monthly_scores',{team:text('team').notNull(),month:text('month').notNull(),mentor:integer('mentor').notNull().default(0),mentee:integer('mentee').notNull().default(0),mentorPlayed:integer('mentor_played').notNull().default(0),menteePlayed:integer('mentee_played').notNull().default(0)},t=>[primaryKey({columns:[t.team,t.month]})]);

export const participants=sqliteTable('participants',{id:text('id').primaryKey(),team:text('team').notNull(),name:text('name').notNull(),role:text('role').notNull(),salt:text('salt').notNull(),hash:text('hash').notNull()},t=>[uniqueIndex('participant_team_role').on(t.team,t.role),uniqueIndex('participant_team_name').on(t.team,t.name)]);
export const invitations=sqliteTable('invitations',{team:text('team').primaryKey(),salt:text('salt').notNull(),hash:text('hash').notNull()});
