const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
    try {
      const user = await User.findOne({
        where: { username: req.body.username },
        raw: true
      })
      if (
        user &&
        middleware.comparePassword(user.passwordDigest, req.body.password)
      ) {
        let payload = {
          id: user.id, 
          username: user.username
        }
        let token = middleware.createToken(payload)
        return res.send({ user: payload, token })
      }
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
      throw error
    }
  }

const Register = async (req, res) => {
  try {
    const { username, password, displayName } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ 
        username, 
        passwordDigest,
        displayName 
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
}

module.exports = {
  Login,
  Register,
  CheckSession
}