import { jsonb, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

export const quizCraft = pgTable('QuizCraft', {
  id: serial('id').primaryKey(),
  body: jsonb('body').notNull(),
  timestamp: timestamp('timestamp').defaultNow()
});
