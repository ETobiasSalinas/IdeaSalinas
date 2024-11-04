let remeras = [
    {
        imagen: './img/remera-simple.png',
        id: 1,
        tipo: "Simple",
        resumen: "Remera simple color Negro (Agregando una estampa te cobramos solo el 5% de interes)",
        precio: 2999.99
    },
    {
        imagen: './img/remera-oversize.webp',
        id: 2,
        tipo: "Oversize",
        resumen: "Remera oversize Mars",
        precio: 4999.99
    },
    {
        imagen: './img/estampado.webp',
        id: 3,
        tipo: "Estampada",
        resumen: "Remera con estampa a gusto",
        precio: 3499.99
    },
    {
        imagen:'./img/830-negra.jpg',
        id: 4,
        tipo: "Termica",
        resumen: "Remera termica color Negro",
        precio: 5999.99
    }
];

function mostrarRemeras() {
    const remerasDiv = document.getElementById("remeras");
    remeras.forEach(remera => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${remera.imagen}" alt="${remera.tipo}">
            <h3>${remera.tipo}</h3>
            <p>${remera.resumen}</p>
            <p>Precio: $${remera.precio}</p>
            <button onclick="agregarAlCarrito(${remera.id})">Comprar</button>
        `;
        remerasDiv.appendChild(div);
    });
}

function agregarAlCarrito(id) {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    const PRODUCTO = remeras.find(prod => prod.id === id);
    const productoEnCarrito = CARRITO.find(prod => prod.id === id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        CARRITO.push({ ...PRODUCTO, cantidad: 1 }); 
    }

    localStorage.setItem('carrito', JSON.stringify(CARRITO));
    mostrarCarrito(); 
}

function mostrarCarrito() {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoList = document.getElementById('carrito');
    carritoList.innerHTML = '';
    let total = 0;

    CARRITO.forEach((remera, index) => {
        let li = document.createElement('li');
        li.textContent = `${remera.tipo} - Precio: ${remera.precio} - Cantidad: ${remera.cantidad}`;
        li.innerHTML += `<button onclick="eliminarDelCarrito(${index})">Eliminar producto</button>`;
        carritoList.appendChild(li);
        total += remera.precio * remera.cantidad;
    });

    total = Math.round(total);
    document.getElementById('total').textContent = `Total: $${total}`; 
}

function eliminarDelCarrito(index) { 
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    CARRITO.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(CARRITO));
    mostrarCarrito(); 
}

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarRemeras();
    mostrarCarrito();
});









