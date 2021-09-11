const mysql = require('mysql')
require("dotenv").config()


const db = mysql.createConnection({
host: "zocket-app.mysql.database.azure.com",
user: "user@zocket-app",
password: process.env.PASS,
database:"myusers" 
})

module.exports = db;