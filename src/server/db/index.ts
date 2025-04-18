import { drizzle } from "drizzle-orm/neon-http";  // Ensure you're using the correct drizzle-orm integration for Neon
import { neon } from "@neondatabase/serverless";  // Make sure to import neon for connecting to Neon DB
import { config } from "dotenv";  // For loading environment variables from .env
import * as schema from "./schema";  // Import your schema definitions

// Load environment variables from the .env file
config({ path: ".env" });  // Make sure your .env file contains the POSTGRES_URL

// Create a Neon database client using the POSTGRES_URL from .env
const sql = neon(process.env.POSTGRES_URL!);

// Set up the database connection with drizzle using the Neon client and schema
export const db = drizzle(sql, { schema });
