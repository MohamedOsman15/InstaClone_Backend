const Router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllComments)
Router.get('/:user_id', controller.GetCommentsByUser)
Router.get('/:post_id', controller.GetCommentsByPost)
Router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateComment
)
Router.delete(
    '/:comment_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteComment
)
Router.put(
    '/:comment_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateComment
)

module.exports = Router