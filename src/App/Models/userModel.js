const db = require('../../Config/Db');

const User = function (user) {
    this.idUser = user.idUser;
    this.email = user.email;
    this.old = user.old;
    this.password = user.password;
    this.phoneNumber = user.phoneNumber;
    this.cartNumberPlates = user.cartNumberPlates;
};

User.checkLogin = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT idUser, email, old, phoneNumber, carNumberPlates,access from user WHERE email = '${email}' and password ='${password}'`,
            (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    if (res.length > 0) {
                        resolve({ result: true, user: res[0] });
                    } else {
                        resolve({ result: false });
                    }
                }
            },
        );
    });
};

User.getProfile = ({idUser}) =>{

    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM user WHERE idUser = ${idUser}`, 
        (err,res) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}


User.changeProfile = ({idUser,old, cartNumberPlates, phoneNumber}) =>{
    return new Promise((resolve, reject) =>{
        db.query(``)
    })
}

module.exports = User;
