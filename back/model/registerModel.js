const sequelize = require('../db/conexion');

module.exports = class registerModel{
    constructor(user){
        this.user= user;
    }

    async create(user){
        let result = await sequelize.query("INSERT INTO users (nombre,apellido_p,apellido_s,correo,password) VALUES ('" + user.nombre + "','" + user.apellido_p + "','" + user.apellido_s + "','"+user.correo+"','"+user.password+"');");
        return result;
     }
}