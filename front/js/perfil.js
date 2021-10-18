function reg_perfil(){
  async function perfil(){
    let correo = document.getElementById('correo').value;
    let ciudad = document.getElementById('ciudad').value;
    let pais = document.getElementById('pais').value;
    let edad = document.getElementById('edad').value;
    let estudios = document.getElementById('estudios').value;
    let linkedin = document.getElementById('linkedin').value;

    if(correo == null || corre.length == 0 || /^\s+$/.test(corre)){
      alertify.error('Error campo correo no llenado');
            return false;

    }else{
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

              }
            }
          }
        }
      }
    }
    let perfil ={
      correo:correo,
      ciudad:ciudad,
      pais:pais,
      edad:edad,
      estudios:estudios,
      linkedin:linkedin
    };

    let url = await fetch('http://localhost:3000/perfil',{
      method:"POST",
      mode:"cors",
      headers:{
          "Content-Type": "application/json",
      },
      body: JSON.stringify(perfil),
  });
  const data = await url.text();
  console.log(data)
  if(data == "Perfil lleno"){
      alertify
     .alert("Perfil llenado", function(){
      alertify.message('OK');
    });
   window.location="./index.html"; 
  }else{
      alertify.error('Error Porfavor revise sus datos');
  }

  }
  perfil();
} 