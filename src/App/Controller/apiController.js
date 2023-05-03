const User = require('../Models/userModel');
const warningModel = require('../Models/warningModel')

const token_require = require('../../until/token');

class apiController {
    uploadFile(req, res) {
        console.log(req.file);
        res.send('Sent');
    }

    login(req, response) {
        const email = req.body.email;
        const password = req.body.password;

        
        User.checkLogin({ email, password })
            .then((res) => {
                if (res.result) {
                    const user = res.user
                    const token = token_require.GenerateAccpectToken({idUser: user.idUser, access: user.access, email: user.email})
                    response.status(200).json({ result: true, user, token });
                } else {
                    response.status(401).json({ result: false, message: 'not found user' });
                }
            })
            .catch((err) => {
                console.log(err);
                response.status(500).json({ result: false, message: 'server is error' });
            });
    }

    sendWarning(req,response)
    {
        const idUser = req.body.idUser
        warningModel.createWarning({idUser})
            .then(res=>{    
                console.log(res)
                response.status(200).json({result: true, message: 'send warning successful', idWarning: res.insertId})
            })
            .catch(err=>{
                console.log(err)
                response.status(500).json({result: false, message: 'server is error'})
            })
    }
}
module.exports = new apiController();
