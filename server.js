require('dotenv').config({ path: './.env'})
const express = require('express')
const app = express()
const routes = require('./src/routes')

app.use(express.json())
app.use(routes)



app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`API webchat is running on http://localhost:${process.env.EXPRESS_PORT}`)
})