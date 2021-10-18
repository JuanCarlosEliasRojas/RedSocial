const perfilController = require('../controller/registerController')

module.exports = async(app)=>{
    app.post('/perfil',async(req,res)=>{
        let perfil = req.body;
        res.send(await perfilController)
    })
}