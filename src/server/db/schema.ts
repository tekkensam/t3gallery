// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";  // Make sure you're importing sql from drizzle-orm
import { varchar } from "drizzle-orm/mysql-core";
import { pgTableCreator, index } from "drizzle-orm/pg-core";  // Import necessary functions for schema creation

// This is where we define our table, using the pgTableCreator function
// The pgTableCreator allows you to dynamically create tables with names prefixed with 't3gallery_'
export const createTable = pgTableCreator((name) => `t3gallery_${name}`);

export const image = createTable(
  "image",
  (d) => ({
    id: d.integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: d.varchar("name", { length: 256 }).notNull(),
    url: d.varchar("url", { length: 1024 }).notNull(),
    createdAt: d.timestamp("createdAt", { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: d.timestamp("updatedAt", { withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)]
);