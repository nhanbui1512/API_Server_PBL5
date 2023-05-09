const userMiddleware = (req,response,next) =>{

    const idUser = req.session.idUser
    const access = req.session.access

    if(idUser && access == 0)
    {
        next();
    }
    else{
        response.redirect('/')
    }

}

module.exports = userMiddleware