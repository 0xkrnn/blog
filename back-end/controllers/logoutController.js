require("dotenv").config()
const authModel = require("../model/authModel")
const jwt = require("jsonwebtoken")

const handleLogOut = async (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(401)

    const refreshToken = cookies.jwt

    const exist = await authModel.findOne({ refresh: refreshToken })
    if (!exist) {
        res.clearCookie('jwt', { maxAge: 24 * 60 * 60 * 1000 }) // claering cookie we have to pass every option
        return res.sendStatus(401)
    }

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        async (err, decoded) => {
            if (err) return res.sendStatus(403)
            if (decoded.username == exist.username) {
                await authModel.updateOne(
                    { username: decoded.username },
                    { $unset: { refresh: "" } }
                )
                res.clearCookie('jwt')
                res.sendStatus(204)
            } else return res.sendStatus(403)
        }
    )
}


module.exports = handleLogOut