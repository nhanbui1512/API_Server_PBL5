const jwt = require('jsonwebtoken');
const dotenv= require('dotenv');
dotenv.config();

module.exports =
{
   GenerateAccpectToken({idUser, access, email })
   {
      return jwt.sign( {
                  idUser: idUser,
                  access: access,
                  email: email,
               },process.env.JWT_PASS,
               {
                  expiresIn:"30d"
               });
   }
}   
