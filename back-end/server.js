const express = require("express");
const app = express()
const PORT = process.env.PORT || 3500
const mongoose = require("mongoose");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser")
const cors = require('cors')

require('dotenv').config()

// built-in middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())
app.use(cors())

// database connection

mongoose.connect(process.env.MONGO_URL)
const connection = mongoose.connection

connection.once("open", () => {
    console.log("connected succefully")
})

connection.on("error", (err) => {
    console.log("error")
})

//routes

app.use("/refresh",require("./routes/refresh"))
app.use("/logout",require("./routes/logoutRoute"))
app.use("/auth", require("./routes/authRoute"));

app.get("/", verifyJWT, (req, res) => {
    console.log(req.user)
    res.send("hello this is protected")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})