const User = require('../Models/userModel');

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
                    response.status(200).json({ result: true, user: res.user });
                } else {
                    response.status(401).json({ result: false, message: 'not found user' });
                }
            })
            .catch((err) => {
                console.log(err);
                response.status(500).json({ result: false, message: 'server is error' });
            });
    }
}
module.exports = new apiController();
