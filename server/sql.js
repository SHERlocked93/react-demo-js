const mysql = require('mysql')

const connection = {
    host: 'localhost',
    post: '3306',
    user: 'root',
    password: '888888',
    database: 'mysql_demo1'
}


function queryFn(sqlStr, arr) {
    const con = mysql.createConnection(connection)
    return new Promise((resolve, reject) => {
        con.query(sqlStr, arr, (error, result) => {
            if (error) {
                reject(error)
                con.end()
            } else {
                resolve(result)
                con.end()
            }
        })
    })
}

module.exports = queryFn
