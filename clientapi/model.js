import pkg from 'pg';
const { Pool } = pkg;

import { ServerError } from './config/problem-types.js';

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  max: 20,
  port: process.env.PORT,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

export const getUserByLogin = async (login) => {
  try {
    const query = 'SELECT "id", "password", "fullName" FROM "user" WHERE "login" = $1';
    const results = await pool.query(query, [login]);

    if (results.rowCount === 0) {
      return null;
    }

    return results.rows[0];
  }
  catch (err) {
    throw new ServerError(`Failed to getUserByLogin - ${err.message}`);
  }
};

export const getClientsByUserId = async (userId) => {
  try {
    const query = 'SELECT "id", "firstName", "middleName","lastName", "status", "accountNumber", "insuranceNumber", "dateOfBirth" FROM "client" WHERE "managerUserId" = $1 ORDER BY "lastName" ASC';
    const results = await pool.query(query, [userId]);

    if (results.rowCount === 0) {
      return null;
    }

    return results.rows;
  }
  catch (err) {
    throw new ServerError(`Failed to fetchData - ${err.message} `);
  }
};

export const updateClientStatus = async (client) => {
  try {
    const newStatus = client.status;

    const query = `UPDATE "client" SET status = $1 WHERE id = $2`;
    const result = await pool.query(query, [newStatus, client.id]);

    return result.rowCount === 1 ? 'success' : 'fail';
  }
  catch (err) {
    throw new ServerError(`Failed to updateData.ERR: ${err.message}`);
  }
};
