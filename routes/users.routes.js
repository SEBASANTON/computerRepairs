const express = require('express');
const { body } = require('express-validator');

const { userExists } = require('../middlewares/users.middlewares');

const {
  createUserValidations,
  updateUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .post(createUserValidations, checkValidations, createUser);

router
  .route('/:id')
  .get(userExists, getUserById)
  .patch(updateUserValidations, checkValidations, userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
