
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

	username: {
		type: String,
		trim: true, 
		required: true,
		unique: true		
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		match:[/^\S+@\S+\.\S+$/, "Por favor utiliza un email válido."],
		unique: true		
	},
	password: {
		type: String,
		required: true
	}
}, 	
	{
		timestamps: true 
	}
)

// 3. MODEL
const User = mongoose.model("User", userSchema)

// 4. EXPORTACIÓN
module.exports = User