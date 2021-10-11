const registerModel = require('../model/registerModel');

module.exports.createUser = async(user)=>{
    let response = new registerModel();
    let result = await response.create(user);
    if(result){
        return "Usuario creado";
    }else{
        return "usurio no creado";
    }
}