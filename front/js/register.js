function registro(){
    async function newRegistro(){
        let nombre = document.getElementById('nombre').value;
        let apellido_p = document.getElementById('apellido_p').value;
        let apellido_s = document.getElementById('apellido_s').value;
        let correo = document.getElementById('correo').value;
        let password = document.getElementById('password').value;

        if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
            alertify.error('Error campo nombre no llenado');
            return false;
        }else{
            if(apellido_p == null || apellido_p.length == 0 || /^\s+$/.test(apellido_p)){
                alertify.error('Error campo primer apellido no llenado no');
                return false;
            }else{
                if(apellido_s == null || apellido_s.length == 0 || /^\s+$/.test(apellido_s)){
                    alertify.error('Error campo segundo apellido no llenado');
                    return false;
                }else{
                    if(correo == null || correo.length == 0 || /^\s+$/.test(correo)){
                        alertify.error('Error campo correo no llenado');
                        return false;
                    }else{
                        if(password == null || password.length == 0 || /^\s+$/.test(password)){
                            alertify.error('Error campo pasword no llenado');
                            return false;
                        }
                    }
                }
            }
        }

        let newusuario = {
            nombre:nombre,
            apellido_p:apellido_p,
            apellido_s:apellido_s,
            correo:correo,
            password:password
        };
        let url = await fetch('http://localhost:3000/newuser',{
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newusuario),
        });
        const data = await url.text();
        console.log(data)
        if(data == "Usuario creado"){
            alertify
           .alert("Usuario Creado correctamente.", function(){
            alertify.message('OK');
          });
         window.location="./login.html"; 
        }else{
            alertify.error('Error Usuario no creado');
        }
    }
    newRegistro();
}
