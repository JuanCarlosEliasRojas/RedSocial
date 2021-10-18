const sequelize = require('../db/conexion');

module.exports = class perfilModel{
    constructor(perfil){
        this.perfil = perfil;
    }

    async create(perfil){
        let result = await sequelize.query("INSERT INTO perfil_users (correo,ciudad,pais,edad,estudios,idiomas,linkedin,hobbies) VALUES ('"+perfil.correo+"','"+ perfil.ciudad+ "','" + perfil.pais + "','" + perfil.edad + "','"+perfil.estudios+"','"+perfil.idiomas+"','"+perfil.linkedin+"','"+perfil.hobbies+"');");
        return result;
    }

    async readinfo(userCorreo){
        let result = await sequelize.query("SELECT id_perfil,nombre,apellido_p,apellido_s,ciudad,pais,edad,estudios,idiomas,linkedin,hobbies FROM users INNER JOIN perfil_users ON users.correo = perfil_users.correo WHERE users.correo = '" + userCorreo + "';");
        return result[0][0];
     }

}