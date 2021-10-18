const perfilModel = require('../model/perfilModel')

module.exports.newPerfil = async(perfil)=>{
    let response = new perfilModel();
    let result = await response.create(perfil);
    if(result){
        return "Perfil del usurio creado";
    }else{
        return " Perfil no creado";
    }
}

module.exports.infoPerfil= async(userCorreo)=>{
    let response = new perfilModel();
    let result = await response.readinfo(userCorreo);
    if(result){
        return result ;
    }else{
        return ({'noExiste' : "La información del usuario no existe."});
    }
}