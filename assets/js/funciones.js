function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    // Verificar que los campos no estén vacíos
    if(nombre == "" || email == "" || mensaje == "") {
      // Mostrar un mensaje de error con los campos vacíos
      alert("Por favor, complete todos los campos del formulario.");
      return false; // Evitar que se envíe el formulario
    }
    
    return true; // Permitir que se envíe el formulario
  }
  

  window.addEventListener("load",function(event){//cuando este cargado

    let form = document.getElementById("formulario");//se obtiene form
    form.addEventListener("submit", function(event) {//event listener de submit de form
      event.preventDefault();//se rpeviene el sumbit default
      if(validarFormulario()){//si funcion retorna true hace lo siguiente
        form.submit();//submitear el formulario
      }
    });




    
  })
  
  


