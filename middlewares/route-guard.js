

exports.authAreas = (req, res, next) => {

	if(req.session.currentUser){

		return res.redirect("/")

	}

	next()
}



exports.privateAreas = (req, res, next) => {


	if(!req.session.currentUser){
		res.redirect("/auth/login")
		return
	}

	next()


}

