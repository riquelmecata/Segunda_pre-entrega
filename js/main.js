// definiendo array de días
const dias = [];
// defino mi array de dias agregados
const dias_agregados = []; 

class Dia {
    constructor (id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descuentos = 12.25;
    }

    quitarIVA() {
        this.precio = this.precio - ((this.precio * this.descuentos) / 100);
    }
}

// buscar el objeto
function buscarDia(id) {
    return (dias.find(item => item.id === id) || null); 
}

function agregarDia(dia) {
    dias_agregados.push(dia);
}

function eliminarDia(id) {
    let pos = dias_agregados.findIndex(item => item.id === id);
}

// recorrer dias

function recorrerDias() {
    let contenido_dias = "";
    for (let dia of dias) {
        contenido_dias += dia.id + ".- " + dia.nombre + " $" + dia.precio + "\n";
    }

    return contenido_dias;
}

function recorrerDiasAgregados() {
    let contenido_dias = "";
    for (let dia of dias_agregados) {
        contenido_dias += dia.id + ".- " + dia.nombre + " $" + dia.precio + "\n";
    }

    return contenido_dias;
}

// carga de dias 
let cargarDia = true;

while (cargarDia) {
    // defino los valores del día
    let id_dia = dias.length + 1;
    let nombre_dia = prompt("Ingrese día trabajado");
    let valor_hora = parseFloat(prompt("Ingrese valor de la hora trabajada"));
    let horas_trabajadas = parseFloat(prompt("Ingrese número de horas trabajadas"));
    let precio_dia = horas_trabajadas * valor_hora;
    // creo mi Dia
    let dia = new Dia(id_dia, nombre_dia, precio_dia);
    console.log(dia);
    // agrego mi Dia al array dias
    dias.push(dia);
    console.log(dias);
    // preguntar si desea continuar agregando días
    cargarDia = confirm("¿Desea agregar otro día trabajado?");
}

// carga de dias agregados
cargarDia = true;

while (cargarDia) {
    let contenido_dias = recorrerDias();

    //indica el id del día
    let id_dia = parseInt(prompt("Seleccione el dia que desea sumar:\n" + contenido_dias));
    //buscar el dia
    let dia = buscarDia(id_dia);
    //verificar si el día seleccionado es valido
    if (dia != null) {
        //agregar el día seleccionado para sumarlo
        agregarDia(dia);
    } else {
        alert("Número no válido, intente nuevamente");
    }
    console.log(dia);
    //pregunta si desea continuar sumando días
    cargarDia = confirm("¿Desea sumar más días?");
}

// eliminar dias
cargarDia = true;

while (cargarDia) {
    let contenido_dias = recorrerDiasAgregados();
    //indica el id del día
    let id_dia = parseInt(prompt("Vas a sumar estos días, inserta un número si deseas eliminarlo: (0 - Salir)\n" + contenido_dias));
    if(id_dia > 0) {
       eliminarDia(id_dia);
    } else {
        alert("Número no válido, intente nuevamente");
    }
    
    //pregunta si desea eliminar otro día
    cargarDia = confirm("¿Desea eliminar otro día?");
}

// imprimo el total de dias a sumar
let suma_total = 0;
let contenido_dias = "";

for (let di of dias_agregados) {
    // nueva instancia de clase dia
    let dia = new Dia (di.id, di.nombre, di.precio);
    dia.quitarIVA(); // se aplican descuentos legales
    contenido_dias += dia.id + ".- " + dia.nombre + " $" + dia.precio + "\n";
    suma_total += dia.precio;
}

// total a pagar
alert("Pago por día con los descuentos legales:\n\n" + contenido_dias + "\n\nRecibirás un sueldo liquido de: $" + suma_total);