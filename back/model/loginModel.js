const sequelize = require('../db/conexion');
module.exports = class loginModel{
    constructor(login){
        this.login = login;
    }

    async find(user){
        let result = await sequelize.query("SELECT correo FROM users WHERE correo = '" + user.correo + "' AND [password] = '" + user.password + "'");
        if(result[0].length >0){
            if(user.correo == result[0][0].user){
                return result[0][0];
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}