const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Paytm")

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,

})


const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model("Account", accountSchema)
const User = mongoose.model("Users", UserSchema)

module.exports = {
    User,
    Account

}

