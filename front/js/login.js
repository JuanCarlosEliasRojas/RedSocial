
function login(){
    async function login_user(){
        let correo = document.getElementById("correo").value;
        let password = document.getElementById("password").value;
        if(correo == null || correo.length == 0 || /^\s+$/.test(correo)){
            alertify.error('Error campo correo no llenado');
            return false;
        }else{
            if(password == null || password.length == 0 || /^\s+$/.test(password)){
                alertify.error('Error campo password no llenado');
                return false; 
            }
        }

        let login = {
            correo : correo,
            password :password
        };
        let url = await fetch('http://localhost:3000/login',{
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
        });
        const data = await url.json();
    console.log(data.token);
    if (data.token != "Usuario no autenticado." && data.token != undefined) {
        localStorage.setItem('token',JSON.stringify(data.token)) 
       
        window.location="./index.html"; 
    } else {
        alertify.error('Error Correo y/o Contraseña Incorrectos');
        console.log(data);
    }
    
    }
   login_user();
}

