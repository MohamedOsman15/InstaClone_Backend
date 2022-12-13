const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllPosts)
Router.get('/:user_id', controller.getPostsByUser)
Router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreatePost
)
Router.delete(
    '/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeletePost
)
Router.put(
    '/:post_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdatePost
)


module.exports = Router