const jsonWebToken = require("jsonwebtoken")
require("dotenv").config()

const verifyJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(401)

    const accessToken = authHeader.split(" ")[1]

    jsonWebToken.verify(
        accessToken,
        process.env.ACCESS_TOKEN,
        (err, decoded) => {
            if (err) return res.sendStatus(403)
            req.user = decoded.username
            console.log(decoded)
            next()
        }
    )
}

module.exports = verifyJWT