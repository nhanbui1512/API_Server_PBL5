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
                    req.session.idUser = user.idUser
                    req.session.access = user.access
        
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


    getWarningByTime(req,response)
    {
        const idUser = req.session.idUser || req.body.idUser
        const day = req.query.day
        const month = req.query.month
        const year = req.query.year


        warningModel.getWarningByTime({day,month, year,idUser})
            .then(data =>{
                data.map((item) =>{
                    const date = new Date(item.createAt);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    const hours = String(date.getHours()).padStart(2, '0');
                    const minutes = String(date.getMinutes()).padStart(2, '0');
                    const seconds = String(date.getSeconds()).padStart(2, '0');

                    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
                    item.createAt = formattedDate
                    item.year = year
                    item.month = month
                    item.day = day
                    item.hours = hours
                    item.minutes = minutes
                    item.seconds = seconds

                })
                response.status(200).json({result: true, data: data})
            })
            .catch(err=>{
                console.log(err)
                response.status(500).json({result: false, message: 'server is error'})
            })
        
    }
}
module.exports = new apiController();
