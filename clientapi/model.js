import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
})

export const getUserByLogin = async (login) => {
    try {
        const query = 'SELECT "id", "password", "fullName" FROM "user" WHERE "login" = $1';
        const results = await pool.query(query, [login]);

        if (results.rowCount === 0) {
            return null;
        }

        return results.rows[0];
    } catch (err) {
        throw new Error(`Failed to getUserByLogin - ${err.message}`);
    }
}
