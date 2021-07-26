const express = require('express')
const messageController = require('./controller/messageController')
const routes = express.Router()


routes.get('/', (req, res) => {
    res.send(`${Date.now()} -- Try other another route`)
})

routes.get('/api', (req, res) =>{

})

routes.post('/api/user/create', (req, res) =>{
    res.send('helloworld')
})

routes.put('/api/user/update', (req, res) =>{

})

routes.post('/api/messages/insert', messageController.insertMessage)

module.exports = routes