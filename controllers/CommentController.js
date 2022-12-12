const { Comment } = require('../models')

const GetAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll()
        res.send(comments)
    } catch(error) {
        throw error
    }
}

const GetCommentsByUser = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            where: { userId: req.params.user_id }
        })
        res.send(comments)
    } catch(error) {
        throw error
    }
}

const GetCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            where: {postId: req.params.post_id}
        })
    } catch(error) {
        throw error
    }
}

const CreateComment = async (req, res) => {
    try {
        const comment = await Comment.create({
            ...req.body
        })
        res.send(comment)
    } catch(error) {
        throw error
    }
}

const UpdateComment = async (req, res) => {
    try {
        const commentId = parseInt(req.params.comment_id)
        const updated = await Comment.update(req.body, {
            where: { id: commentId }
        })
        res.send(updated)
    } catch(error) {
        throw error
    }
}

const DeleteComment = async (req, res) => {
    try {
        const commentId = parseInt(req.params.comment_id)
        await Comment.destroy({
            where: { id: commentId }
        })
        res.send({ message: `Deleted comment with an Id of ${commentId}` })
    } catch(error) {
        throw error
    }
}

module.exports = {
    GetAllComments,
    GetCommentsByPost,
    GetCommentsByUser,
    CreateComment,
    UpdateComment,
    DeleteComment
}