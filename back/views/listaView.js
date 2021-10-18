const listaController = require('../controller/listaController');

module.exports = async (app) =>{
    app.get('/users',async(req,res)=>{
        let resp =await listaController.list();
        console.log(resp);
        res.send(resp);
    })
}