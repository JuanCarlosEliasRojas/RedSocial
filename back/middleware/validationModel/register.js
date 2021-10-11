const Joi = require('joi');

module.exports = {
    userModel : Joi.object().keys({
        nombre: Joi.string().min(1).max(50).required(),
        apellido_p: Joi.string().min(1).max(50).required(),
        apellido_s: Joi.string().min(1).max(50).required(),
        correo: Joi.string().email({ minDomainSegments: 2 }).lowercase().required(),
        password: Joi.string().min(8).max(50).required()
    }).with('nombre',['apellido_p','apellido_s','correo','password'])
}