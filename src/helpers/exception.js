class Exception extends Error {
    constructor(error, customMessage, statusCode){
        super(error)

        
        this.stackError = error?.stack ? error.stack : error
        this.simpleStack = `${this.stack.split('\n').slice(0, 2).join('\n')}\n`

        this.message= error?.message || error
        this.customMessage = customMessage || 'No filled Custom Error'
        this.statusCode = statusCode || 500
    }
}

module.exports = Exception