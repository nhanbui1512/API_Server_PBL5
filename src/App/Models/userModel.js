const db = require('../../Config/Db');

const User = function (user) {
    this.idUser = user.idUser;
    this.email = user.email;
    this.old = user.old;
    this.password = user.password;
    this.phoneNumber = user.phoneNumber;
    this.cartNumberPlates = user.cartNumberPlates;
};

User.findById = ({idUser})=>{

    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM user WHERE idUser = ${idUser}`, 
            (err,res) =>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })

}

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


User.changeProfile = ({idUser,old, carNumberPlates, phoneNumber}) =>{
    return new Promise((resolve, reject) =>{
        db.query(`UPDATE user SET old = ${old}, carNumberPlates = '${carNumberPlates}', phoneNumber = '${phoneNumber}' WHERE idUser = ${idUser}`
            ,(err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })
}

User.changePassword = ({idUser, newPassword})=>{
    return new Promise((resolve,reject) =>{
        db.query(`UPDATE user SET password = '${newPassword}' WHERE idUser = ${idUser}`, 
            (err,res)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )
    })

}

User.findByEmail = ({email}) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM user WHERE email = '${email}'`, (err,res) =>{
            if(err)
            {
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })

}


User.addUser = ({email, password, phoneNumber, carNumberPlates, old, }) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO user (email, password, phoneNumber, carNumberPlates, old, access) VALUES ('${email}' , '${password}' , '${phoneNumber}', '${carNumberPlates}', ${old}, 0 )`,
            (err,res) =>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(res)
                }
            }
        )   
    })
}

module.exports = User;
