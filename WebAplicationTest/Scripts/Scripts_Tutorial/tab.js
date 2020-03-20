
$.get("RepasoHTML/listarPersonas", function (data) {

    //alert(JSON.stringify(data));
    var contenido = "";

    contenido += "<table class='table' >";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<td>id Persona</td>";
    contenido += "<td>Nombre</td>";
    contenido += "<td>Apellido Paterno</td>";
    contenido += "</tr>";
    contenido += "</thead>";

    contenido += "<tbody>";
    var nfilas = data.length;

    for (var i = 0; i < nfilas; i++) {

        contenido += "<tr>";
        contenido += "<td>" + data[i].idPersona + "</td>";
        contenido += "<td>" + data[i].nombre + "</td>";
        contenido += "<td>" + data[i].apellidoPaterno + "</td>";
        contenido += "</tr>";
    }

    contenido += "</tbody>";
    contenido += "</table>";
    document.getElementById("divTabla").innerHTML = contenido;
});