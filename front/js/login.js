async function login(){
    //Vailidacion de los campos
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    if(correo == null || correo.length == 0 || /^\s+$/.test(correo)) {
        alertify.error('Error campo de correo vacio');
        return false;
    } else if(password == null || password.length == 0 || /^\s+$/.test(password)) {
        alertify.error('Error campo de password vacio');
        return false;
    }
    
    //Proceso del login
    let login = {
        correo: correo,
        password: password
    };   
    let url = await fetch('http://localhost:3000/login', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
    });
    //Regreso del token
    const data = await url.json();
    console.log(data.token);
    if (data.token != "Usuario no autenticado.") {
        localStorage.setItem('token',JSON.stringify(data.token)) //Manda el token al local storage
        window.location="./index.html"; //Redirigir a la pagina
    } else {
      
alertify
.alert("Correo y/o usurio incorrectos", function(){
  alertify.message('OK');
});
    }
}
