// Correct imports for PostgreSQL
import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

// Define the table with correct column types for PostgreSQL
export const Budgets = pgTable('budgets', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  amount: varchar('amount').notNull(),
  icon: varchar('icon'),
  createdBy: varchar('createdBy').notNull()
});
