const validateMessage = require('../schemas/validateMessage')
const log4js = require('log4js')
const logConfig = require("../configs/log4js.json");
log4js.configure(logConfig);
const logger = log4js.getLogger();

class messageController{
    static async showMessages(req, res, next){

    }
    static async insertMessage(req, res, next){
        const data = req.body
        logger.info('MessageController -- Data received...')
        await validateMessage(data)
        logger.info('MessageController -- Message Validated')
        
    }
}


module.exports = messageController