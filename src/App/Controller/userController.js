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
}
module.exports = new userController();
