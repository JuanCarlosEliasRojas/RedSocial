async function registro(){
    let token = JSON.parse(localStorage.getItem('token'));
    let token_decoded = JSON.parse(window.atob(token.split('.')[1])); 

    let correo = token_decoded.data.correo;
    
    let ciudad = document.getElementById("ciudad").value;
    let pais = document.getElementById("pais").value;
    let edad = document.getElementById("edad").value;
    let estudios = document.getElementById("estudios").value;
    let idiomas = document.getElementById("idioma").value;
    let hobbies = document.getElementById("hobie").value;

    let linkedin = document.getElementById("linkedin").value;

  
    if(ciudad == null || ciudad.length == 0 || /^\s+$/.test(ciudad)){
        alertify.error('Error campo ciudad no llenado');
            return false;

      }else{
        if(pais == null || pais.length == 0 || /^\s+$/.test(pais)){
          alertify.error('Error campo pais no llenado');
            return false;

        }else{
          if(edad == null || edad.length == 0 || /^\s+$/.test(edad)){
            alertify.error('Error campo edad no llenado');
            return false;

          }else{
            if(estudios == null || estudios.length == 0 || /^\s+$/.test(estudios)){
              alertify.error('Error campo estudios no llenado');
            return false;

            }else{
              if(linkedin == null || linkedin.length == 0 || /^\s+$/.test(linkedin)){
                alertify.error('Error campo linkedin no llenado');
            return false;

              }else{
                if(idiomas == null || idiomas.length == 0 || /^\s+$/.test(idiomas)){
                  alertify.error('Error campo idioma no llenado');
                  return false;
                }else{
                  if(hobbies == null || hobbies.length == 0 || /^\s+$/.test(hobbies)){
                    alertify.error('Error campo hobbies no llenado');
                    return false;
                  }
                }
              }
            }
          }
        }
      }
    
   
    let perfil = {
        correo:correo,
        ciudad:ciudad,
        pais:pais,
        edad:edad,
        estudios:estudios,
        idiomas:idiomas,
        linkedin:linkedin,
        hobbies:hobbies
    };   
    let url = await fetch('http://localhost:3000/perfil', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify(perfil),
    });
    //Regreso de la respuesta
    const data = await url.text();
    console.log(data)
    if (data != "Perfil no creado.") {
      alertify
      .alert("Usuario Creado correctamente.", function(){
       alertify.message('OK');
     });
    } else {
        alert("Los datos no pudieron guardarse correctamente.")
    }
}

async function mostrarInf(){
    let token = JSON.parse(localStorage.getItem('token')); 
    let tokenDecoded = decodeURIComponent(window.atob(token.split('.')[1]).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')); 
    let token_decoded = JSON.parse(tokenDecoded); 
    const correo = String(token_decoded.data.correo); 

    const nombre = document.getElementById("nombre");
    const apellido_p = document.getElementById("apellido_p");
    const apellido_s = document.getElementById("apellido_s");
    nombre.value = token_decoded.data.nombre;
    apellido_p.value = token_decoded.data.apellido_p;
    apellido_s.value = token_decoded.data.apellido_s;

    let url = await fetch('http://localhost:3000/perfil/'+ correo , {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
      
        },
    });
    
    const data = await url.json(url);
    console.log(data)
    if (data.noExiste != "La información del usuario no existe.") {
       
       
        const cd = document.getElementById("ciudad");
        const pais = document.getElementById("pais");
        const edad = document.getElementById("edad");
        const estudios = document.getElementById("estudios");
        const idiomas = document.getElementById("idioma");
        const hobbies = document.getElementById("hobie");
        const linkedIn = document.getElementById("linkedin");

      
        cd.value = data.ciudad;
        pais.value = data.pais;
        edad.value = data.edad;
        estudios.value = data.estudios;
        idiomas.value = data.idiomas;
        linkedIn.value = data.linkedIn;
        hobbies.value = data.hobbies;
        
    } else {
      alertify
      .alert("La información del perfil no existe, debe llenar los campos para guardar su información.", function(){
       alertify.message('OK');
     });
    }
}


mostrarInf();