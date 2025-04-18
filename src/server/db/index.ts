import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema"; // <-- Make sure it pulls in `image`

config({ path: ".env" });

const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql, { schema });