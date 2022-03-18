const Meme = require("../models/Meme")
const fileUploader = require("../config/cloudinary")


exports.getMemes = async (req, res) => {

    const allMemes = await Meme.find({})

    return res.render("memes/memes", {
        memes: allMemes
    })

}

exports.createMeme = async (req, res) => {

    res.render("memes/create")
}

exports.createMemeForm = async (req, res) => {

    const { name, about, origin, imageUrl } = req.body

    try {

        const newMeme = await Meme.create({ name, about, origin, imageUrl })


        return res.redirect("/memes")
        
    } catch (error) {

        return res.render("memes/create", {
            errorMsg: "Hubo un problema al crear el meme."
        })

    }

}

exports.getDetails = async (req, res) => {

try {
    
    const { memeID } = req.params
    console.log(memeID)
    console.log(typeof memeID)

    const singleMeme = await Meme.findById(memeID)

    return res.render("memes/details", {
        singleMeme
    })

} catch (error) {

    return res.render(`memes`, {
        errorMsg:"Hubo un problema al cargar los detalles del meme"
    })

}

}

exports.editMeme = async (req, res) => {

    const {memeID} = req.params
    
    const singleMeme = await Meme.findById(memeID)

    res.render("memes/edit", {
        singleMeme
    })

}

exports.editMemeForm = async (req, res) => {

    const { name, about, origin, imageUrl }= req.body

    const { memeID } = req.params

    await Meme.findByIdAndUpdate(
        memeID,
        { name, about, origin, imageUrl },
        { new: true }

    )
    
    res.redirect(`/memes/${memeID}`)
}

exports.deleteMeme = async (req, res) => {

    const { memeID } = req.params

    try {
        const deletedMeme = await Meme.findByIdAndRemove(memeID)

        res.redirect("/memes")

    } catch (error) {
 
        res.redirect(`/memes/${memeID}`, {
            msgError: "No se pudieron guardar los cambios."
            
        })

    }

}

exports.fileUploader = async (req, res) => {

    const { imageUrl } = req.body
   
    try {
        
        fileUploader.single('meme-image')

        const newMemeImage = await Meme.create({ imageUrl: req.file.path })

        return res.redirect("/memes")

    } catch (error) {
        console.log(`Error while uploading the image: ${error}`) 
    }

 };


