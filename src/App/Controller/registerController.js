const userModel = require('../Models/userModel')


class registerController {
    //GET /news
    index(req, res) {
        res.render('register.hbs', { layout: false });
    }

    signUp(req,response){
        const user = {
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            old: req.body.old,
            carNumber: req.body.carNumber
        }


        userModel.findByEmail({email: user.email})
            .then(res=>{
                if(res.length > 0){
                    response.redirect('/register')
                }
                else{
                    userModel.addUser({email: user.email, password: user.password, carNumberPlates: user.carNumber, phoneNumber: user.phoneNumber, old:user.old})
                        .then(res=>{
                            console.log(res)
                            response.redirect('/')
                        })
                        .catch(err=>{
                            console.log(err)
                            response.send('server is error')
                        })
                }
            })
            .catch(err=>{
                console.log(err)
                response.redirect('/register')
            })


    }
}
module.exports = new registerController();
