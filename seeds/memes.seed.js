const mongoose = require("mongoose")
const Meme = require("./../models/Meme")
const connectDB = require("./../config/db")
require("dotenv").config()

connectDB()

const memes = [
    {
        name: "Pepe the frog",
        about: "Pepe the Frog es un popular meme de internet. Es una rana antropomórfica verde con un cuerpo humanoide. Se convirtió en un meme de Internet cuando su popularidad creció constantemente en Myspace, Gaia Online y 4chan",
        origin: " Pepe se originó en un cómic de Matt Furie llamado Boy's Club. ",
        imageUrl: "https://ih1.redbubble.net/image.939445632.1893/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
    },
    {
        name: "Trollface",
        about: "Imagen de un personaje que lleva una sonrisa maquiavélica, utilizado para simbolizar cuando alguien tiene un comportamiento de trolleo (trol).",
        origin: "Originario de el tipo rage comic",
        imageUrl: "https://static.wikia.nocookie.net/enciclopedia-meme/images/d/dc/Troll_face.png/revision/latest?cb=20131215222952&path-prefix=es"
    },
    {
        name: "Meme man",
        about: "Meme Man, sometimes also referred to as Mr. Succ and the Stonks guy, is a character often featured in internet memes. He is depicted as a 3D render of a smooth, bald, and often disembodied blue-eyed male head",
        origin: "He was popularized in the mid-2010s by the artist Special meme fresh, and became a common character in many surreal memes, a genre of internet humor inspired by surrealism.",
        imageUrl: "https://m.media-amazon.com/images/I/51ouQmk3EWL._AC_SL1000_.jpg"
    },
    {
        name: "Obamium",
        about: "Also known as Obama Pyramid and Obama Prism, refers to a series of memes imagining various chemical substances and geometric figures consisting of and named after the former United States President Barack Obama.",
        origin: " On July 31st, 2019, iFunny user Barack posted a GIF of a spinning pyramid with its sides covered with a stretched photograph of Barack Obama ",
        imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/030/873/Screenshot_20.jpg"
    },
    {
        name: ":3 / Cat Face",
        about: ":3, also referred to as the “cat face,” is an emoticon mimicking a cute facial expression often worn by moe characters featured in Japanese manga and animes.",
        origin: ":3 can be seen as a horizontal variant of (‘ω’), a well-known Japanese emoticon representing a cat’s face that first became popular through its frequently usage on Japanese text and image board sites, most notably on 2channel, as well as other online communities since the early 2000s.",
        imageUrl: "https://i.kym-cdn.com/entries/icons/facebook/000/001/130/Untitled.jpg"
    },
    {
        name: "Knife Cat",
        about: "Knife Cat refers to an edit of Smug Cat's face photoshopped onto a picture of a cat being threatened with a knife. The image has been frequently used in photoshops and artwork.",
        origin: "The image of the cat being threatened by a knife originates from a post on pikabu of a scared cat being threatened by a knife with the title threats will not work. The image was first posted on July 9th, 2014 by user kimax06 and has since gained over 1 thousand likes.",
        imageUrl: "https://i.kym-cdn.com/photos/images/facebook/001/389/123/797.png"
    },
    {
        name: "John Xina",
        about: "John Xina also know as Jiang Xina or Zhong Xina is an exploitable image macro of WWE Wrestler John Cena Photoshopped to look like Chinese communist revolutionary Mao Zedong.",
        origin: "On May 24th, 2021, a video of John Cena's Apology To China surfaced on Twitter, uploaded by user @JoeXu. The video was originally posted to the Chinese social media site Weibo, by John Cena's account RealWWEJohnCena.",
        imageUrl: "https://i.redd.it/sacn44wagu871.jpg"
    },
    {
        name: "DaBaby Convertible",
        about: "DaBaby Convertible, also known as DaBabymobile and DaBaby Car, refers to a viral photoshop in which rapper DaBaby's head is given car wheels. ",
        origin: "The meme references jokes about DaBaby's head shape resembling a Crysler PT Cruiser and a lyric from DaBaby's song Suge.",
        imageUrl: "https://img1.picmix.com/output/stamp/normal/6/0/9/1/2201906_ae49e.png"
    },
    {
        name: "Shroomjak",
        about: "Shroomjak or Mushroom Wojak, also known as Shrigma Male is a variation of the Wojak character that resembles a mushroom, adorned with a smiling face. The Wojak was first posted to 4chan's /b/ board in January 2021, becoming popularized later in the year as it was shared around social media and spread to other platforms.",
        origin: "On January 30th, 2021, an anonymous user of 4chan's[1] Random (/b/) board posted an image of a Wojak character resembling a mushroom, writing, -i made my own wojak- (shown below). The first reply to the post is -kys-, meaning kill yourself.",
        imageUrl: "https://i.kym-cdn.com/entries/icons/original/000/037/610/covershroomwoj.jpg"
    },
    {
        name: "Mundial Ronaldinho Soccer 64 Opening",
        about: "Mundial Ronaldinho Soccer 64 Opening refers to the opening animation of Mundial Ronaldinho Soccer 64, a bootleg Brazilian version of the 1996 Nintendo 64 video game International Superstar Soccer 64. Starting in May 2020, the opening has been subject to numerous remixes and parodies, often appearing as a bait-and-switch punchline.",
        origin: "On April 6th, 2020, Twitter user @TheEssem posted the clip of the intro animation to Twitter, with the video gaining 200 views. In the following week, they went on to use the clip as a response to a number of tweets.",
        imageUrl: "https://i.ytimg.com/vi/F52vrBArAVE/hqdefault.jpg"
    },
    {
        name: "Mike Wazowski-Sulley Face Swap",
        about: "Mike Wazowski-Sulley Face Swap refers to an image of Monsters Inc. character Mike Wazowski with the face of character Sulley photoshopped over his own. Online, the image gained popularity as a reaction and has also been used in ironic memes.",
        origin: "On July 14th, 2019, Facebook page Sulley Core uploaded a still image from 2002 film Monsters Inc. in which characters James P. Sulley Sullivan and Mike Wazowski are faceswapped. The post gained over 1,100 likes and over 6,800 shares in two months",
        imageUrl: "https://preview.redd.it/peibne3f05a81.png?width=640&crop=smart&auto=webp&s=dfb83c647d9fb79ab2ae49ba9981bd107a650c5d"
    },
        
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