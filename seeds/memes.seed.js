const mongoose = require("mongoose")
const Meme = require("./../models/Meme")
const connectDB = require("./../config/db")
require("dotenv").config()

connectDB()

const memes = [
    {
        name: "meme",
        about: "momo",
        origin: "sd",
        imageUrl: "https://elcomercio.pe/resizer/hRs1vfTyfRkhn0bJ2fqvesXyxpg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TZWQAX3MXNHAXFI2ENMUOUGFDQ.jpg"
    }
]

const createMemes = async (data) => {

    try{
        const createMemes = await Meme.create(data)
        console.log(createMemes)
        return mongoose.connection.close()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

createMemes(memes)