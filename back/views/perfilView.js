const perfilController = require('../controller/perfilController')

module.exports = async(app)=>{
    app.post('/perfil',async(req,res)=>{
        let perfil = req.body;
        let resp = await perfilController.newPerfil(perfil);
        console.log(resp);
        res.send(resp);
    });


    app.get('/perfil/:correo',async(req,res) => {
        let userCorreo = req.params.correo
        let resp = await perfilController.infoPerfil(userCorreo);
        console.log(resp);
        res.send(resp);
    });
}