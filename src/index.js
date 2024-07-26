// import { getProductCategories } from './data.js';

// const categorias = getProductCategories();

// // Filtrar solo las categorías que están en temporada de descuento
// const categoriasEnDescuento = categorias.filter(categoria => categoria.enTemporadaDeDescuento);

// const container = document.getElementById('categorias-container');

// categoriasEnDescuento.forEach(categoria => {
//     const categoriaDiv = document.createElement('div');
//     categoriaDiv.classList.add('categoria');

//     const title = document.createElement('h2');
//     title.textContent = categoria.nombre;

//     const descripcion = document.createElement('p');
//     descripcion.textContent = categoria.descripcion;

//     const precio = document.createElement('p');
//     precio.textContent = `Rango de precios: $${categoria.precioMin} - $${categoria.precioMax}`;

//     // const temporada = document.createElement('p');
//     // temporada.textContent = `En temporada de descuento: ${categoria.enTemporadaDeDescuento ? 'Sí' : 'No'}`;

//     const popularidad = document.createElement('p');
//     popularidad.textContent = `Popularidad: ${categoria.popularidad} / 5`;

//     const productosDestacadosDiv = document.createElement('div');
//     productosDestacadosDiv.classList.add('producto-imagen');
//     // productosDestacadosDiv.textContent = 'Productos destacados:';

//     categoria.productosDestacados.forEach(producto => {
//         const productoDiv = document.createElement('div');
//         productoDiv.classList.add('producto');

//         const productoImg = document.createElement('img');
//         productoImg.src = producto.imgUrl;
//         productoImg.alt = producto.nombre;
//         productoImg.style.width = '200px'; // Ajusta el tamaño según sea necesario

//         productoDiv.appendChild(productoImg);
//         productosDestacadosDiv.appendChild(productoDiv);
//     });

//     categoriaDiv.appendChild(title);
//     categoriaDiv.appendChild(descripcion);
//     categoriaDiv.appendChild(precio);
//     // categoriaDiv.appendChild(temporada);
//     categoriaDiv.appendChild(popularidad);
//     categoriaDiv.appendChild(productosDestacadosDiv);

//     container.appendChild(categoriaDiv);
// });






import { getProductCategories } from './data.js';

const categorias = getProductCategories();

if (categorias) {
    // Filtrar solo las categorías que están en temporada de descuento
    const categoriasEnDescuento = categorias.filter(categoria => categoria.enTemporadaDeDescuento);

    const container = document.getElementById('categorias-container');
    const template = document.getElementById('categoria-template');

    categoriasEnDescuento.forEach(categoria => {
        const categoriaDiv = template.cloneNode(true);
        categoriaDiv.style.display = 'block';

        categoriaDiv.querySelector('.categoria-nombre').textContent = categoria.nombre || 'Nombre no disponible';
        categoriaDiv.querySelector('.categoria-descripcion').textContent = categoria.descripcion || 'Descripción no disponible';
        categoriaDiv.querySelector('.categoria-precio').textContent = categoria.precioMin && categoria.precioMax 
            ? `Rango de precios: $${categoria.precioMin} - $${categoria.precioMax}` 
            : 'Rango de precios no disponible';
        categoriaDiv.querySelector('.categoria-popularidad').textContent = `Popularidad: ${categoria.popularidad || 'No disponible'} / 5`;

        const productosDestacadosDiv = categoriaDiv.querySelector('.producto-imagen');
        productosDestacadosDiv.innerHTML = ''; // Limpiar contenido anterior

        if (categoria.productosDestacados && categoria.productosDestacados.length > 0) {
            categoria.productosDestacados.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');
                productoDiv.style.width = '50%';
                

                const productoImg = document.createElement('img');
                productoImg.src = producto.imgUrl || 'ruta/a/imagen/por/defecto.png';
                productoImg.alt = producto.nombre || 'Producto destacado';
                productoImg.style.width = '100%';
                productoImg.style.height = '100%';

                productoDiv.appendChild(productoImg);
                productosDestacadosDiv.appendChild(productoDiv);
            });
        } else {
            productosDestacadosDiv.textContent = 'No hay productos destacados';
        }

        container.appendChild(categoriaDiv);
    });
} else {
    console.error('No se pudo obtener la lista de categorías');
}


















// import { getProductCategories } from './data.js';

// const categorias = getProductCategories();

// if (categorias) {
//     // Filtrar solo las categorías que están en temporada de descuento
//     const categoriasEnDescuento = categorias.filter(categoria => categoria.enTemporadaDeDescuento);

//     const container = document.getElementById('categorias-container');
//     const template = document.getElementById('categoria-template').content;
//     const productoDivTemplate = document.querySelector('.producto-imagen-template');

//     categoriasEnDescuento.forEach(categoria => {
//         const categoriaDiv = document.importNode(template, true);
//         categoriaDiv.querySelector('.categoria-nombre').textContent = categoria.nombre || 'Nombre no disponible';
//         categoriaDiv.querySelector('.categoria-descripcion').textContent = categoria.descripcion || 'Descripción no disponible';
//         categoriaDiv.querySelector('.categoria-precio').textContent = categoria.precioMin && categoria.precioMax 
//             ? `Rango de precios: $${categoria.precioMin} - $${categoria.precioMax}` 
//             : 'Rango de precios no disponible';
//         categoriaDiv.querySelector('.categoria-popularidad').textContent = `Popularidad: ${categoria.popularidad || 'No disponible'} / 5`;

//         const productosDestacadosDiv = categoriaDiv.querySelector('.producto-imagen');
//         productosDestacadosDiv.innerHTML = ''; // Limpiar contenido anterior

//         if (categoria.productosDestacados && categoria.productosDestacados.length > 0) {
//             categoria.productosDestacados.forEach(producto => {
//                 if (productoDivTemplate) {
//                     const productoDiv = productoDivTemplate.cloneNode(true);
//                     productoDiv.style.display = 'block'; // Asegúrate de que el `div` sea visible

//                     const productoImg = productoDiv.querySelector('img');
//                     productoImg.src = producto.imgUrl || 'ruta/a/imagen/por/defecto.png';
//                     productoImg.alt = producto.nombre || 'Producto destacado';

//                     productosDestacadosDiv.appendChild(productoDiv);
//                 }
//             });
//         } else {
//             productosDestacadosDiv.textContent = 'No hay productos destacados';
//         }

//         container.appendChild(categoriaDiv);
//     });
// } else {
//     console.error('No se pudo obtener la lista de categorías');
// }
