require('dotenv').config({ path: ".env.development" });

console.log(process.env.SQL_HOST);
// get development or production
const config = {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_ID,
    password: process.env.SQL_PASS,
    database: process.env.SQL_DB
}

module.exports = config;