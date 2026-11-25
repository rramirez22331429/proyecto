// PANEL SOLAR

function calcularSolar() {

    let P = Number(document.getElementById("potencia").value);
    let h = Number(document.getElementById("horas").value);
    let angulo = Number(document.getElementById("angulo").value);

    if (P <= 0 || h <= 0 || angulo < 0 || angulo > 90) {
        document.getElementById("resultadoSolar").innerHTML =
            "❌ Ingresa valores correctos.";
        return;
    }

    let energia = P * h * Math.cos(angulo * Math.PI / 180);

    document.getElementById("resultadoSolar").innerHTML =
        "✅ Energía estimada: " + energia.toFixed(2) + " Wh";
}


// CINCO PRUEBAS DEL PANEL SOLAR

function pruebasSolar() {

    let P = Number(document.getElementById("potenciaPrueba").value);
    let h = Number(document.getElementById("horasPrueba").value);

    let tabla = "";

    for (let i = 1; i <= 5; i++) {

        let angulo = Number(
            document.getElementById("angulo" + i).value
        );

        let energia =
            P * h * Math.cos(angulo * Math.PI / 180);

        tabla += "<tr>";
        tabla += "<td>" + i + "</td>";
        tabla += "<td>" + angulo + "°</td>";
        tabla += "<td>" + energia.toFixed(2) + " Wh</td>";
        tabla += "</tr>";
    }

    document.getElementById("tablaSolar").innerHTML = tabla;
}


// HUERTO

function calcularHuerto() {

    let x = Number(document.getElementById("largo").value);

    if (x <= 0 || x >= 20) {

        document.getElementById("resultadoHuerto").innerHTML =
            "❌ x debe ser mayor que 0 y menor que 20.";

        return;
    }

    let y = 20 - x;
    let area = x * y;

    document.getElementById("resultadoHuerto").innerHTML =
        "✅ Ancho: " + y.toFixed(2) + " m<br>" +
        "✅ Área: " + area.toFixed(2) + " m²";
}


// CINCO PRUEBAS DEL HUERTO

function pruebasHuerto() {

    let tabla = "";

    for (let i = 1; i <= 5; i++) {

        let x = Number(
            document.getElementById("x" + i).value
        );

        let y = 20 - x;
        let area = x * y;

        tabla += "<tr>";
        tabla += "<td>" + i + "</td>";
        tabla += "<td>" + x.toFixed(2) + " m</td>";
        tabla += "<td>" + y.toFixed(2) + " m</td>";
        tabla += "<td>" + area.toFixed(2) + " m²</td>";
        tabla += "</tr>";
    }

    document.getElementById("tablaHuerto").innerHTML = tabla;
}