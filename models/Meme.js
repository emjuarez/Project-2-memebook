const mongoose = require("mongoose")

const memeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    origin: {
        type: String,
    },
    imageUrl: {
        type: String,
    }
})

const Meme = mongoose.model("Meme", memeSchema)
module.exports = Meme