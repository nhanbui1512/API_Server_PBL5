const warningModel = require('../Models/warningModel')
const userModel = require('../Models/userModel')


class userController {
    //GET /news
    index(req, response) {
        const idUser = req.session.idUser 

        warningModel.getWarningByIdUser({idUser})
            .then(res=>{
                response.render('user/dashboard.hbs', { layout: 'userLayout.hbs', data: res});
            })
            .catch(err=>{
                console.log(err)
                response.send('serer is ')
            })

       
       
    }

    profile(req,response)
    {

        const idUser = req.session.idUser
        userModel.getProfile({idUser})
            .then(res=>{
                
                const user = res[0]
                
                response.render('user/profile.hbs', {layout: 'userLayout.hbs',user:user})
                
            })
            .catch(err=>{
                console.log(err)
                response.send('server is error')
            })
        
    }

    // user/changeprofile
    changeProfile(req,response)
    {
        const idUser = req.session.idUser;
        const old = req.body.old;
        const carNumberPlates = req.body.carNumberPlates;
        const phoneNumber = req.body.phoneNumber;

        userModel.changeProfile({idUser,old,carNumberPlates, phoneNumber})
            .then(res=>{
                response.redirect('/user/profile')
            })
            .catch(err=>{
                console.log(err);
                response.send('server is error');
            });

    }

    passwordPage(req,response){
        response.render('user/changePassword.hbs', {layout: 'userLayout.hbs'})
    }

    changePassword(req,response){

        var oldPassWord = req.body.oldpass
        var newPassWord = req.body.newpass

        const idUser = req.session.idUser

        userModel.findById({idUser})
            .then((res) =>{
                const data =  res[0]
                if(oldPassWord == data.password ){
                    userModel.changePassword({idUser,newPassword: newPassWord})
                        .then(res=>{
                            response.status(200).json({result: true})
                        })
                        .catch(err=>{
                            console.log(err)
                            response.status(500).json({result: false})
                        })
                }
                else{
                    response.status(200).json({result: false})
                }
            })
            .catch(err=>{
                console.log(err)
                response.status(401).json({result: false})
            })
    }

    logOut(req,response){
        req.session.destroy();
        response.redirect('/')
    }
}
module.exports = new userController();
