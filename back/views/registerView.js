const registerController = require('../controller/registerController')
const validation = require('../middleware/validation')

module.exports = async(app)=>{
    app.post('/newuser',validation.userValidation,async(req,res)=>{
        let user = req.body;
        res.send(await registerController.createUser(user));
    })
}