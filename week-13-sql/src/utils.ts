import { Client } from 'pg';

export async function getClient() {
    const client = new Client("	postgresql://kannadb_owner:xQJR0Cu6bske@ep-tight-lake-a5yr87gn.us-east-2.aws.neon.tech/kannadb?sslmode=require");
    await client.connect();
    return client;
}