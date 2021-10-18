
const sequelize = require('../db/conexion');

module.exports = class perfilModel{
    constructor(user){
        this.user = user;
    }
     
    async lista_usurios(){
        let result = await sequelize.query("SELECT nombre,apellido_p,apellido_s,correo FROM users");
        return result [0];
    }
    
}