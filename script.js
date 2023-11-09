function problema1() {
    let edad = prompt('Ingresar su edad');
    
    if (edad === "") {
        alert('Usted debe ingresar su edad por favor');
    } else if (edad >= 18) {
        alert('Usted es mayor de edad');
    } else {
        alert('Usted es menor de edad');
    }
}

function problema2() {
    let temperatura = prompt('Ingresar su temperatura');

    if (temperatura === '') {
        alert('Ingresar la temperatura por favor');
    } else if (temperatura < 0) {
        alert('Hace frioo: ' + temperatura + '°C grados');
    } else if (temperatura <= 25) {
        alert('La temperatura es agradable: ' + temperatura + '°C grados')
    } else {
        alert('Hace calor: ' + temperatura + '°C grados');
    }
}

function problema3() {
    let nombreUsuario = prompt('ingrese su nombre de usuario');
    let contraseña = prompt('ingrese su contraseña');

    if (nombreUsuario, contraseña === '') {
        alert('ingresar un valor por favor');
    } else if (nombreUsuario == 'usuario123', contraseña == 'secreto') {
        alert('acceso concedido');
    } else {
        alert('acceso denegado');
    }
}

function problema4() {
    let numero = prompt('ingresar un numero');

    if (numero === '') {
        alert('por favor ingresar un numero');
    } else if (numero < 0) {
        alert('su numero: ' + numero + " " + 'es negativo');
    } else if (numero == 0){
        alert('su numero: ' + numero + " " + 'es igual a cero');
    } else {
        alert('su numero es numero positivo');
    }
    
}

function problema5() {
    let puntuacion = prompt('ingresar su puntuacion');

    if (puntuacion === '') {
        alert('por favor ingresar su puntuacion');
    } else if (puntuacion >= 90) {
        alert('Excelente');
    } else if (puntuacion >= 70) {
        alert('Buen trabajo')
    } else {
        alert('Necesitas mejorar');
    }
}