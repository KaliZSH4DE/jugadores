// Array bidimensional que almacenará los datos ingresados
let data = [];

// Función para agregar datos al array y mostrarlos en la tabla
function addData() {
    // Obtener valores de las cajas de texto y combo
    const name = document.getElementById('name').value; // Obtener el nombre
    const age = document.getElementById('age').value; // Obtener la edad
    const country = document.getElementById('country').value; // Obtener el país seleccionado
    const sm = parseFloat(document.getElementById('sm').value); // Obtener el saldo mensual seleccionado
    const sa = parseFloat(sm*12); // Obtener el saldo anual seleccionado
    const team = document.getElementById('team').value; // Obtener el equipo seleccionado
    const liteam = document.getElementById('liteam').value; // Obtener el link del equipo seleccionado
    const conti = document.getElementById('conti').value; // Obtener el continente seleccionado
    const suma = parseFloat(sm + sa); // Obtener el continente seleccionado



    // Validar que se hayan ingresado todos los campos
    if (name === "" || age === "" || country === "" || sm === "" || team === "" || liteam === "" || conti === "") {
        alert("Por favor, completa todos los campos."); // Mostrar mensaje si falta información
        return; // Salir de la función si hay campos vacíos
    }

    // Agregar los datos al array bidimensional
    data.push([name, age, country, sm, sa, team, liteam, conti, suma]);

    // Limpiar la tabla antes de llenarla de nuevo
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = ""; // Eliminar el contenido actual de la tabla

    // Llenar la tabla con los datos actualizados
    data.forEach(row => {

        
        const tr = document.createElement('tr'); // Crear fila de tabla
        row.forEach(cell => {
            const td = document.createElement('td'); // Crear celda de tabla
            td.textContent = cell; // Asignar texto a la celda
            tr.appendChild(td); // Añadir celda a la fila
        });
        tableBody.appendChild(tr); // Añadir fila a la tabla
    });

    // Limpiar los campos de entrada
    document.getElementById('name').value = ""; // Limpiar el campo de nombre
    document.getElementById('age').value = ""; // Limpiar el campo de edad
    document.getElementById('country').value = "México"; // Restablecer el combo a "México"
    document.getElementById('sm').value = ""; // Limpiar el campo de sueldo mensual
    document.getElementById('sa').value = ""; // Limpiar el campo de sueldo anual
    document.getElementById('team').value = ""; // Limpiar el campo de equipo
    document.getElementById('liteam').value = ""; // Limpiar el campo de link del equipo
    document.getElementById('conti').value = "America"; // Limpiar el campo de continente
}