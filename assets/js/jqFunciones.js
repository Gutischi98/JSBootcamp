$(document).ready( function () {//evento cuando documento este listo
    //SE usa libreria datatable en tabla de archivo estadisticas
    //se le cambian textos de ingles a español, como el buscar, mostrar x registros, etc
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