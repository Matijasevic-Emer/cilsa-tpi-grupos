import { getGamingProducts } from './mock.js';

document.addEventListener('DOMContentLoaded', () => {
    const products = getGamingProducts();
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${product.nombre}</h5>
                    <p class="card-text">${product.descripcion}</p>
                    <p class="card-text"><strong>Precio:</strong> $${product.precio}</p>
                    <p class="card-text"><strong>Descuento:</strong> ${product.descuento}%</p>
                    <p class="card-text"><strong>Marca:</strong> ${product.marca}</p>
                    <p class="card-text"><strong>Modelo:</strong> ${product.modelo}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Stock: ${product.stock}</small>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
});
