$.get("Curso/listarcurso", function (data) {
    alert("Ok");

    crearlistado(data);
});

$(document).ready(function () {
    alert("Ok -- 2");
    $.getJson('@Url.Action("listarcurso","Curso")', function (data) {
        alert("Ok -- 3");

        crearlistado(data);
    });
});





function crearlistado(data) {
    var contenido = "";

    contenido += "<table class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<td>id curso</td>";
    contenido += "<td>nombre</td>";
    contenido += "<td>descripcion</td>";
    contenido += "</tr>";
    contenido += "</thead>";

    contenido += "<tbody>";
    for (var i = 0; i < data.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + data[i].IIDCURSO + "</td>";
        contenido += "<td>" + data[i].NOMBRE + "</td>";
        contenido += "<td>" + data[i].DESCRIPCION + "</td>";
        contenido += "</tr>";
    }
    contenido += "</tbody>";
    contenido += "</table>";
    document.getElementById("tabla_curso").innerHTML = contenido;
}