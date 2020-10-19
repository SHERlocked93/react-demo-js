const express = require('express')
const app = express()
const sqlQuery = require('./sql')

app.get('/', (req, res) => {
    res.send('答题服务器')
})

app.get('/api/rtimu', async (req, res) => {
    // 随机获取10个题目
    const page = req.query.page ? req.query.page : 2
    const strSql = `select * from quizzes limit ${ page * 10}, 10;`
    console.log({ page, strSql })
    const result = await sqlQuery(strSql)
    console.log(result)
    res.json(Array.from(result))
})

app.listen(9038, () => {
    console.log('server start', 'http://localhost:9038')
})
