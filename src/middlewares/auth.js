const jwt = require('jsonwebtoken')


class SessionController{
    static validateToken = (request, response, next) => {
        try {
            const token = request.headers['x-access-token']
            const decodedToken = jwt.verify(token, process.env.SECRET_AUTH_KEY)
            const userId = decodedToken.userId
            if (request.body.userId && request.body.userId !== userId) throw 'Invalid user ID'
            next()
        } catch(error) {
            res.status(401).json({
                error: new Error('Invalid request!') || error
            });
        }
    }
    static gerateNewToken = (request, response, next) => {
        
    }
}


module.exports = SessionController