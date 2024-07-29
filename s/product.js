import { getGamingProducts } from './mock.js';

document.addEventListener('DOMContentLoaded', () => {
    const products = getGamingProducts();
    const productList = document.getElementById("product-list");
    const cartCountElement = document.getElementById('cart-count');
    const cartIcon = document.querySelector('.cart-icon img');

    // Inicializar el contador del carrito desde sessionStorage
    let cartCount = parseInt(sessionStorage.getItem('cartCount')) || 0;
    cartCountElement.textContent = cartCount;
    if (cartCount > 0) {
        cartCountElement.style.display = 'inline';
    }

    let productHTML = "";

    products.forEach((product) => {
        productHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <a href="./productdetail.html?id=${product.id}">
                        <img src="${product.imagen}" class="card-img-top" alt="${product.nombre}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${product.nombre}</h5>
                        <p class="card-text">${product.descripcion}</p>
                        <p class="card-text"><strong>Precio:</strong> $${product.precio}</p>
                        <p class="card-text"><strong>Descuento:</strong> ${product.descuento}%</p>
                        <p class="card-text"><strong>Stock:</strong> ${product.stock}</p>
                        <p class="card-text"><strong>Marca:</strong> ${product.marca}</p>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary decrement-btn" type="button">-</button>
                            </div>
                            <input type="text" class="form-control quantity-input text-center" value="1" min="1" readonly data-stock="${product.stock}">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary increment-btn" type="button">+</button>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                        <button class="btn btn-primary mr-1 agregar-carrito-btn">Agregar al carrito</button>
                        </div>
                        </div>
                </div>
            </div>
        `;
    });
    productList.innerHTML = productHTML;

    // Add event listeners for the increment and decrement buttons
    document.querySelectorAll('.increment-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const quantityInput = event.target.closest('.input-group').querySelector('.quantity-input');
            let quantity = parseInt(quantityInput.value);
            const stock = parseInt(quantityInput.getAttribute('data-stock'));
            if (quantity < stock) {
                quantityInput.value = quantity + 1;
            }
        });
    });

    document.querySelectorAll('.decrement-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const quantityInput = event.target.closest('.input-group').querySelector('.quantity-input');
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = quantity - 1;
            }
        });
    });

    // Add event listener for the "Agregar al carrito" button
    document.querySelectorAll('.agregar-carrito-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const quantityInput = event.target.closest('.card-body').querySelector('.quantity-input');
            const quantityToAdd = parseInt(quantityInput.value);

            if (!isNaN(quantityToAdd) && quantityToAdd > 0) {
                cartCount += quantityToAdd;
                sessionStorage.setItem('cartCount', cartCount);
                cartCountElement.textContent = cartCount;
                cartCountElement.style.display = 'inline';

                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });

                // Make cart icon pulse
                cartIcon.classList.add('pulse');
                setTimeout(() => {
                    cartIcon.classList.remove('pulse');
                }, 5000);
            }
        });
    });
});
