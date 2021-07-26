const mongoose = require('mongoose')

let connection = null

class MongoDB{
    static createConnection(){
        const options = {
            user: process.env.DB_MONGO_USER,
            pass: process.env.DB_MONGO_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            poolSize: 5,
            serverSelectionTimeoutMS: 15000,
            socketTimeoutMS: 20000,
            connectTimeoutMS: 15000
        }

        if (!process.env.DB_MONGO_USER || process.env.DB_MONGO_USER.length === 0) {
            delete options.user
        }

        if (!process.env.DB_MONGO_PASSWORD || process.env.DB_MONGO_PASSWORD.length === 0) {
            delete options.pass
        }

        if (process.env.DB_REPLICASET && process.env.DB_REPLICASET.length > 0) {
            process.env.DB_MONGO_HOST += process.env.DB_REPLICASET
        }

        return mongoose.createConnection(`mongodb://${process.env.DB_MONGO_HOST}/${process.env.DB_MONGO_DATABASE}`, options)       
    }

    static startEvents() {
        connection.on('disconnected', () => {
            connection = MongoDB.createConnection()
        })

        connection.on('error', () => mongoose.disconnect())

        process.on('SIGINT', () => {
            mongoose.disconnect(err => {
                process.exit(err ? 1 : 0)
            })
        })

        process.on('message', msg => {
            if (msg === 'shutdown') {
                mongoose.disconnect(err => {
                    process.exit(err ? 1 : 0)
                })
            }
        })
    }

    static getOrCreateConnection() {
        if (!connection) {
            connection = MongoDB.createConnection()
            MongoDB.startEvents()
        }

        return connection
    }
}
module.exports = MongoDB