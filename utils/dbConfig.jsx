import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql =  neon("postgresql://Expenses-Tracker_owner:zF4MWV8uDAvq@ep-solitary-firefly-a563qr6d.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require")
const db = drizzle(sql,{schema});