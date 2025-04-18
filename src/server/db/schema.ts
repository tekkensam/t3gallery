// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";  // Make sure you're importing sql from drizzle-orm
import { pgTableCreator, index } from "drizzle-orm/pg-core";  // Import necessary functions for schema creation

// This is where we define our table, using the pgTableCreator function
// The pgTableCreator allows you to dynamically create tables with names prefixed with 't3gallery_'
export const createTable = pgTableCreator((name) => `t3gallery_${name}`);

// Defining the 'posts' table schema
export const posts = createTable(
  "post",  // Table name
  (d) => ({
    id: d.integer("id").primaryKey().generatedByDefaultAsIdentity(),  // 'id' field as integer, primary key, auto-increment
    name: d.varchar("name", { length: 256 }),  // 'name' field as varchar (string) with max length 256
    createdAt: d.timestamp("createdAt", { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),  // 'createdAt' field with timezone
    updatedAt: d.timestamp("updatedAt", { withTimezone: true }).$onUpdate(() => new Date()),  // 'updatedAt' field, automatically updated
  }),
  (t) => [
    index("name_idx").on(t.name),  // Create an index on the 'name' field
  ]
);
