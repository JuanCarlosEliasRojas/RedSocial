const registerController = require('../controller/registerController')

module.exports = async(app)=>{
    app.post('/newuser',async(req,res)=>{
        let user = req.body;
        res.send(await registerController.createUser(user));
    })
}