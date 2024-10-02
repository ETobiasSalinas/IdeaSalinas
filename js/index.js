function comprar() {
    let total = 0;
    let precioRemera = 3000;
    let tasaInteres = 0.05;
    let remera = 3000;
    let remeraComun = 0;
    let remeraInteres = 0;
    
    let nombre = prompt('Ingresa tu nombre');
    let estilo = prompt('Escriba CON o SIN estampa');
    let cantidad = parseFloat(prompt('Ingrese cuántas va a llevar'));

    if (!isNaN(cantidad) && cantidad > 0) {
    } else {
        alert('Ingrese un número válido');
    }

    remeraComun = parseFloat(cantidad) * remera;

    if (estilo.toLowerCase() === 'con'){
        remeraInteres = tasaInteres * remeraComun;
       }
       

    console.log(nombre + ' compró ' + cantidad + ' remera/as ' + estilo + ' estampa. Su precio es de $'+remeraComun + ' + $' + remeraInteres);

}

comprar();


