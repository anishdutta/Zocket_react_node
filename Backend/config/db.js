const mysql = require('mysql')

const db = mysql.createConnection({
host: "35.244.33.164",
user: "root",
password: "test123",
database:"myusers" 
})

module.exports = db;