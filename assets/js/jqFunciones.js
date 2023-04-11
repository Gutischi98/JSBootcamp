$(document).ready( function () {
    $('#tabla').DataTable({
       "language":{
            "search":         "Buscar:",
            "lengthMenu":     "Mostrar _MENU_ registros",
            "info":           "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "paginate": {
                "first":      "Primero",
                "last":       "Último",
                "next":       "Siguiente",
                "previous":   "Previo"
            },
       }
    });
    
} );