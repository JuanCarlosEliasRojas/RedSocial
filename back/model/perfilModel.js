const sequelize = require('../db/conexion');

module.exports = class perfilModel{
    constructor(perfil){
        this.perfil = perfil;
    }

    async create(perfil){
        let result = await sequelize.query("INSERT INTO perfil_user (corre,ciudad,pais,edad,estudios,linkedin) VALUES ('" + perfil.correo + "','" + perfil.ciudad + "','" + perfil.pais + "','"+perfil.edad+"','"+perfil.estudios+"','"+perfil.linkedin+"');");
        return result;
    }
}