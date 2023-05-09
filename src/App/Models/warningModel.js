const db = require('../../Config/Db');

const Warning = function (warning) {
    this.idWarning = warning.idWarning
    this.createAt = warning.createAt
    this.idUser = warning.idUser
};

Warning.createWarning = ({ idUser }) => {
    return new Promise ((resolve, reject) =>{
        db.query(`INSERT INTO warning (idUser,createAt) VALUES (${idUser} , CURRENT_TIMESTAMP)`,(err,res) =>{
            if(err)
            {
                console.log(err)
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
};


Warning.getWarningByIdUser = ({idUser}) => {
    return new Promise((resolve,reject)=>{

        db.query(`SELECT * FROM warning WHERE idUser = ${idUser}`, (err,res) =>{
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })

}

module.exports = Warning;
