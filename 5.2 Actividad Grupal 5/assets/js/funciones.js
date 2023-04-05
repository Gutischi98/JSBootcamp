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

  // Busca el botón de envío por su ID y agrega el atributo onclick
document.getElementById("enviar").setAttribute("onclick", "return validarFormulario()");
