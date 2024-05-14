const authModel = require("../model/authModel")
const bcrypt = require("bcrypt")
const jsonWebToken = require("jsonwebtoken")
require("dotenv").config()

const handleRegister = async (req, res) => {

    const { username, password } = req.body
    if (!username || !password) return res.status(400)

    try {
        const exist = await authModel.findOne({ username })

        if (!exist) {
            let hashedPwd = bcrypt.hashSync(String(password), 10)

            const newUser = new authModel({
                username,
                password: hashedPwd
            })
            await newUser.save()
            return res.status(201).json(newUser)
        }
        else res.status(409).json({ "error": "user exist" })
    } catch (err) {
        console.log(err);
        res.json({ "error": "unknown error occured" })
    }
}


const handleLogin = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res.status(400)

    try {

        const exist = await authModel.findOne({ username })

        if (exist) {
            const match = bcrypt.compareSync(String(password), exist.password)

            if (match) {

                const accessToken = jsonWebToken.sign(
                    { username: exist.username },
                    process.env.ACCESS_TOKEN,
                    { expiresIn: '5m' }
                )

                const refreshToken = jsonWebToken.sign(
                    { "username": exist.username },
                    process.env.REFRESH_TOKEN,
                    { expiresIn: '1d' }
                )

                await authModel.updateOne(
                    { username: exist.username },
                    { $set: { refresh: refreshToken } }
                )

                res.cookie('jwt', refreshToken, { maxAge: 24 * 60 * 60 * 1000 })
                res.status(200).json({ accessToken })
            }
            else res.status(401).json({ "message": "username & password doesn't match" })

        } else res.status(403)
    } catch (err) {
        console.log(err);
        res.json({ "error": "unknown error occured" })
    }
}

module.exports = {
    handleRegister,
    handleLogin
}