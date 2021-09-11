const mysql = require('mysql')

const db = mysql.createConnection({
host: "zocket-app.mysql.database.azure.com",
user: "user@zocket-app",
password: "Deep_2000",
database:"myusers" 
})

module.exports = db;