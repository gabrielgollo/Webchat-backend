const log4js = require('log4js')
const logConfig = require("../configs/log4js.json");
log4js.configure(logConfig);
const logger = log4js.getLogger();

const validateMessage = require('../schemas/validateMessage')
const MessageModel = require('../models/mongodb/messageModel');
const Exception = require('../helpers/exception');

class messageController{
    static async showMessages(req, res, next){
        try{
            logger.info('MessageController - Trying to retrieve some data from Mongo...')
            const messages = await MessageModel.getMessages()
            if(!messages){
                throw new Exception('No Messages Found', 'No Messages Found'    , 204 )
            }
            res.status(200).json({data:messages})
        } catch (error){
            res.status(500).json({error: error.message})
        }
    }
    static async insertMessage(req, res){
        try{
            const data = req.body
            console.log(data)
            logger.info('MessageController -- Data received...')
            await validateMessage(data)
            logger.info('MessageController -- Message Validated')
            const insertMessage = await MessageModel.insert(data)
            res.status(201).json({data: { ...insertMessage._doc }, message:"Message successfully created!"})
        } catch (error) {
            logger.error(error.message)
            res.status(error.statusCode).json({errorMessage: error.message})
        }
        
        
    }
}


module.exports = messageController