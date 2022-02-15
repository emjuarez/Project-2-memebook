const Meme = require("../models/Meme")

exports.getMemes = async (req, res) => {

    const allMemes = await Meme.find({})

    console.log(allMemes)

    return res.render("memes/memes", {
        memes: allMemes
    })

}

exports.createMeme = async (req, res) => {

    res.render("memes/create")
}

exports.createMemeForm = async (req, res) => {

    const { name, about, origin } = req.body

    try {

        const newMeme = await Meme.create({ name, about, origin })

        console.log(newMeme)

        return res.redirect("/memes")
        
    } catch (error) {
        
        console.log(error)

        return res.render("memes/create", {
            errorMsg: "Hubo un problema al crear el meme."
        })

    }

}

