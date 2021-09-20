const mysql = require('mysql')
require("dotenv").config()


const db = mysql.createConnection({
host: "mysqlapp.cihwoiky5cks.us-east-1.rds.amazonaws.com",
user: "root",
password: process.env.PASS,
database:"Mysqlapp" 
})

module.exports = db;