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

let remeras = [
    {
        remera: "simple",
        color: "todos",
        talle: "l al xl",
        precio: 2999.99
    },
    {
        remera: "oversize",
        color: "todos",
        talle: "unico",
        precio: 4999.99
    },
    {
        remera: "estampado",
        color: "todos",
        talle: "l al xl",
        precio: 3499.99
    },
    {
        remera: "termica",
        color: "negro",
        talle: "m al l",
        precio: 5999.99
    }
]

for(let i=0; i<remeras.length; i++){
    console.log(remeras[i])
}

preciosRedondeados = remeras.map (precios => Math.ceil(precios.precio));
console.log(preciosRedondeados)

let pantalones = [
    {
        pantalon: "jogin",
        color: "gris, negro",
        talle: "l al xl",
        precio: 1500
    },
    {
        pantalon: "jean",
        color: "todos",
        talle: "l al xl",
        precio: 3000
    },
    {
        pantalon: "cargo",
        color: "sin stock",
        talle: "sin stock",
        precio: 2500
    },
]

let prendasDeVestir = remeras.concat(pantalones)
console.log(prendasDeVestir)

let totalRemeras = remeras.reduce((total, remera) => total + remera.precio, 0);
let totalPantalones = pantalones.reduce((total, pantalon) => total + pantalon.precio, 0);
let precioTotal = totalRemeras + totalPantalones;
let precioTotalRedondeado = Math.ceil(precioTotal)

console.log(`El precio total de las remeras es $${totalRemeras}`);
console.log(`El precio total de los pantalones es $${totalPantalones}`);
console.log(`El precio total de remeras y pantalones es $${precioTotalRedondeado}`);

  
  
  












