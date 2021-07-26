const MongoDB = require('../../database/mongodb')

const connection = MongoDB.getOrCreateConnection()

const Schema = require('../../schemas/mongodb/userSchema')

const UserModel = connection.model('Users', Schema, 'users')


UserModel.insert = userObject => {
    UserModel.create(userObject)
}

UserModel.show = () => {
    UserModel.find({})
}

UserModel.UpdateById = (id, userObject) => {
    UserModel.findByIdAndUpdate(id, userObject)
}