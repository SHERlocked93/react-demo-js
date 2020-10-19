const mysql = require('mysql')

const connection = {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: '888888',
    database: 'mysql_demo1'
}

const con = mysql.createConnection(connection)

function queryFn(sqlStr, arr) {
    return new Promise((resolve, reject) => {
        con.query(sqlStr, arr, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
                con.end()
            }
        })
    })
}

module.exports = queryFn
