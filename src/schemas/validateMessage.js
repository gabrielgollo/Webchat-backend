const yup = require('yup')
const Exception = require('../helpers/exception')

const createMessageSchema = new yup.ObjectSchema({
    userId: yup.string().required('O campo userId é obrigatório'),
    name: yup.string().required('O campo name é obrigatório'),
    message: yup.string().required('O campo message é obrigatório'),
    date: yup.string().required('O campo date é obrigatório')
})


module.exports = async (message) => {
    return await createMessageSchema.validate(message).catch(error => {
        if (error) throw new Exception(error, 'Validate Error', 400)
    })
}