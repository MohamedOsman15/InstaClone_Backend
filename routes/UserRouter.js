const Router = require('express').Router()
const userController = require('../controllers/UserController')
const authController = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.get('/', userController.GetAllUsers)
Router.post('/register', authController.Register)
Router.post('/login', authController.Login)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  authController.CheckSession
)
Router.put(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  userController.UpdateUser
)
Router.delete('/:user_id', userController.DeleteUser)

module.exports = Router
