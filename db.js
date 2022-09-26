const { Pool} = require ('pg')

const pool = new Pool ({
    host : "localhost",
    user : "postgres",
    password : "5833",
    database : "baseqwe",
    port : "5432"
})
module.exports = pool