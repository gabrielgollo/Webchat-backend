const yup = require("yup");
const Exception = require("../helpers/exception");

const createMessageSchema = new yup.ObjectSchema({
  userId: yup.string().required("O campo userId é obrigatório"),
  name: yup.string().required("O campo name é obrigatório"),
  message: yup.string().required("O campo message é obrigatório"),
  date: yup.string().required("O campo date é obrigatório"),
});

const createUserSchema = new yup.ObjectSchema({
  name: yup.string().required("O campo name é obrigatório"),
  email: yup.string().required("O campo email é obrigatório"),
  password: yup.string().min(6).required("O campo password é obrigatório"),
});

const loginSchema = new yup.ObjectSchema({
  name: yup.string().required("O campo email é obrigatório"),
  password: yup.string().min(6).required("O campo password é obrigatório"),
});

module.exports = async (message, type) => {
  const typeValidation = { createMessageSchema, createUserSchema, loginSchema };

  return await typeValidation[type].validate(message).catch((error) => {
    if (error) throw new Exception(error, error.message, 400);
  });
};
