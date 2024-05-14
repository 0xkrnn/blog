const authModel = require("../model/authModel");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const handleRefreshToken = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401)

    const refreshToken = cookies.jwt
    const exist = await authModel.findOne({ refresh: refreshToken })
    if (!exist) return res.sendStatus(403)

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN,
        (err, decoded) => {
            if (err) return res.sendStaus(401)
            const accessToken = jwt.sign(
                { "username": decoded.username },
                process.env.ACCESS_TOKEN,
                {expiresIn : "5m"}
            )
            res.json({accessToken})
        }
    )
}

module.exports = handleRefreshToken