const Joi = require('joi');
const {userModel} = require('./validationModel/register');



module.exports.userValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, userModel, "Los datos ingresados no son correctos para el registro.")
        return next();
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}


module.exports.loginValidation = async function(req,res,next){
    try {
        await Joi.attempt(req.body, loginModel, "Los datos ingresados no son correctos para el login.")
        return next();
    } catch (error) {
        console.log("Error de validacion "+error);
        res.status(500).json({error: error.message})
    }
}

