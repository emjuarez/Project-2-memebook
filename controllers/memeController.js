const Meme = require("../models/Meme")

exports.getMemes = async (req, res) => {
    const allMemes = await Meme.find({})
    console.log(allMemes)
    return res.render("memes/memes", {
        memes: allMemes
    })
}