const MongoDB = require('../../database/mongodb')

const connection = MongoDB.getOrCreateConnection()

const Schema = require('../../schemas/mongodb/messageSchema')


const MessageModel = connection.model('History_Messages', Schema, 'history_messages')


MessageModel.insert = messageObject => {
    return MessageModel.create(messageObject)
}

MessageModel.show = () =>{
    return MessageMode.find({
        date: { $gte: (Date.now()- 24 * 3.6 * 10**6) }
    })
}