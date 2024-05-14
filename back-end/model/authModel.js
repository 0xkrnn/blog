const { Schema, default: mongoose } = require("mongoose")

const authSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        refresh : {
            required : false,
            type : String
        }
    }
);


module.exports = mongoose.model("users",authSchema)