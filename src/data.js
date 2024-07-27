import { getGamingProducts } from './MOCK.js';

const renderProductosDestacados = () => {
    const productos = getGamingProducts();
    const productosDestacados = productos.filter(producto => producto.destacado);
    const contenedor = document.getElementById('productos-destacados');

    productosDestacados.forEach(producto => {
        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card m-3 col-12 col-md-12 col-lg-12';
        card.style.width = '18rem';
        card.style.background = '#FF0099';

        // Crear el enlace
        const link = document.createElement('a');
        link.href = "#"; // Actualiza esto con el enlace correcto

        // Crear la imagen
        const img = document.createElement('img');
        img.src = `/public/images/${producto.imagen}`; // Asegúrate de que la ruta sea correcta
        img.className = 'card-img-top mt-2';
        img.alt = producto.nombre;

        // Añadir la imagen al enlace
        link.appendChild(img);

        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Crear el título de la tarjeta
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = producto.nombre;
        cardTitle.className = 'text-white';

        // Añadir el título al cuerpo de la tarjeta
        cardBody.appendChild(cardTitle);

        // Añadir el enlace y el cuerpo de la tarjeta a la tarjeta
        card.appendChild(link);
        card.appendChild(cardBody);

        // Añadir la tarjeta al contenedor
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderProductosDestacados);




const renderProductosOfertas = () => {
    const productos = getGamingProducts();
    const productosOferta = productos.filter(producto => producto.enOferta);
    const contenedor = document.getElementById('productos-ofertas');

    productosOferta.forEach(producto => {
        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card m-3 col-12 col-md-12 col-lg-12';
        card.style.width = '18rem';
        card.style.background = '#FF0099';

        // Crear el enlace
        const link = document.createElement('a');
        link.href = "#"; // Actualiza esto con el enlace correcto

        // Crear la imagen
        const img = document.createElement('img');
        img.src = `/public/images/${producto.imagen}`; // Asegúrate de que la ruta sea correcta
        img.className = 'card-img-top mt-2';
        img.alt = producto.nombre;

        // Añadir la imagen al enlace
        link.appendChild(img);

        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Crear el título de la tarjeta
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = producto.nombre;
        cardTitle.className = 'text-white';

        // Añadir el título al cuerpo de la tarjeta
        cardBody.appendChild(cardTitle);

        // Añadir el enlace y el cuerpo de la tarjeta a la tarjeta
        card.appendChild(link);
        card.appendChild(cardBody);

        // Añadir la tarjeta al contenedor
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderProductosOfertas);

