const listaModel = require('../model/listaModel');

module.exports.list = async()=>{
    let response = new listaModel();
    let result = await response.lista_usurios();
    return result;
}