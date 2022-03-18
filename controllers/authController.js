
const bcryptjs		= require("bcryptjs")
const mongoose		= require("mongoose")

const User			= require("./../models/User")

exports.register = (req, res) => {

	res.render("auth/register")

}

exports.registerForm = async (req, res) => {

	const { username, email, password } = req.body



	if(!username || !email || !password){

		return res.render("auth/register", {
			errorMessage: "Todos los campos deben llenarse."
		})
	}	

	const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

	if(!regex.test(password)){
		
		return res.render("auth/register", {
			errorMessage: "Tu contraseña debe incluir 6 caracteres, al menos un número, una minúscula y una mayúscula."
		})

	}


	const salt = await bcryptjs.genSalt(10)


	const hashedPassword = await bcryptjs.hash(password, salt)


	try {
		const newUser = await User.create({
			username,
			email, 
			password: hashedPassword
		})
	
		console.log(newUser)
	
		return res.redirect("/profile")

	} catch (error) {
		
		console.log(error)

		console.log(error.errors)

	
		if (error instanceof mongoose.Error.ValidationError){
			
			return res.render("auth/register", {
				errorMessage: "Por favor utiliza un correo electrónico real."
			})
		}

		return

	}
	

}


exports.login = (req, res) => {

	res.render("auth/login")

}

exports.loginForm = async (req, res) => {

	console.log(req.body)


	const { email, password } = req.body


	const foundUser = await User.findOne({ email })

	if(!foundUser){

		res.render("auth/login", {
			errorMessage: "Email o contraseña sin coincidencia."
		})

		return
	}


	const verifiedPass = await bcryptjs.compareSync(password, foundUser.password)

	if(!verifiedPass){

		res.render("auth/login", {
			errorMessage: "Email o contraseña incorrecta."
		})

		return

	}


	req.session.currentUser = {
		_id: foundUser._id,
		username: foundUser.username,
		email: foundUser.email,
		msg: "Este es su ticket"
	}


	return res.redirect("/profile")

}


exports.logout = async (req, res) => {

	req.session.destroy((error) => {

		if(error){
			console.log(error)
			return
		}

		res.redirect("/")


	})

}