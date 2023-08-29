require('dotenv').config()
const { createPool } = require('mysql')

const connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    database: process.env.dbName,
    port: process.env.dbPort,
    multipleStatements: true,
    connectionLimit: 30
})

module.exports = connection