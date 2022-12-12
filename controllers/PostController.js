const { Post } = require('../models')

const GetAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.send(posts)
    } catch (error) {
        throw error
    }
}

const getPostsByUser = async (req, res) => {
    try {
        const posts = await Post.findAll({ where: {userId: req.params.user_id} })
        res.send(posts)
    } catch (error) {
        throw error
    }
}

const CreatePost = async (req, res) => {
    try {
        const post = await Post.create({
            ...req.body
        })
        res.send(post)
    } catch (error) {
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        const postId = parseInt(req.params.post_id)
        const updated = await Post.update(req.body, {
            where: { id: postId },
            returning: true
        })
        res.send(updated)
    } catch (error) {
        throw error
    }
}

const DeletePost = async (req, res) => {
    try {
        const postId = parseInt(req.params.post_id)
        await Post.destroy({ where: {id: postId} })
        res.send({ message: `Deleted post with an id of ${postId}` })
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllPosts,
    getPostsByUser,
    CreatePost,
    UpdatePost,
    DeletePost
}