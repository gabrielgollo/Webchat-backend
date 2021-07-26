require('dotenv').config({ path: './.env'})
const express = require('express')
const app = express()
const routes = require('./src/routes')

app.use(routes)



app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`API is running on http://localhost:${process.env.EXPRESS_PORT}`)
})