const loginController = require('../controller/loginController')

module.exports = async (app)=>{
    app.post('/login',async(req,res)=>{
        let user = req.body;
        let token = await loginController.login(user);
        res.send({'token':token});
        console.log(token);
    });
}