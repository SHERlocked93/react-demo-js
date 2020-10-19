const express = require('express')
const app = express()
const sqlQuery = require('./sql')

app.get('/', (req, res) => {
    res.send('答题服务器')
})

app.get('/api/rtimu/', async (req, res) => {
    res.append('Access-Control-Allow-Origin', '*')
    res.append('Access-Control-Allow-Content-Type', '*')  // 跨域
    const page = req.query.page ? req.query.page : 2
    const strSql = `select * from quizzes limit ${ page * 10 }, 10;`
    const result = await sqlQuery(strSql)
    res.json(Array.from(result))
})

app.listen(9038, () => {
    console.log('server start', 'http://localhost:9038')
})
