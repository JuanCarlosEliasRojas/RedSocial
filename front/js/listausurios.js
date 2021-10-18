async function mostrarUsuarios(){
    let token = JSON.parse(localStorage.getItem('token'));//Obtiene el token desde el local storage

    let url = await fetch('http://localhost:3000/users', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
    });
    const data = await url.json(url);
    console.log(data)
    let usuarios = document.getElementById("contenedorUsuarios");
    for (let i = 0; i < data.length; i++) {
        var contenedor = document.createElement("div");
        let usuario = `
      
	
    		<div class="col-sm-4" style="margin-top: 150px;">
            <h3>Usurios nuevos</h3>
              <img class="card-img-top" src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" alt="Card image cap">
              <div class="card-body mb">
              <h5 class="card-title">${data[i].nombre} ${data[i].apellido_p} ${data[i].apellido_s}</h5>
              <p id="emailReceive" class="item-email">${data[i].correo}</p>
              <button type="button" class="btn btn-danger envSolicitud"><i class="fas fa-user-friends"></i> Enviar solicitud de amistad</button>
            </div>
       
        `;
        contenedor.innerHTML += usuario;
        usuarios.appendChild(contenedor);
    }

   
}
mostrarUsuarios();