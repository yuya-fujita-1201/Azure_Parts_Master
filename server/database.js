const sql = require('mssql');

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 1433,
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};

async function getParts(query) {
    let pool = await sql.connect(config);
    let result = await pool.request().query(query);
    return result.recordset;
}

module.exports = {
    getParts
};
