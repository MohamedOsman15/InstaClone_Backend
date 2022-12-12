const Router = require('express').Router()
const CommentRouter = require('./CommentRouter')
const PostRouter = require('./PostRouter')
const UserRouter = require('./UserRouter')

Router.use('/comments', CommentRouter)
Router.use('/posts', PostRouter)
Router.use('/users', UserRouter)

module.exports = Router