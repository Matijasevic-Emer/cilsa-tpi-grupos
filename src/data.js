export const getProductCategories = () => {
    return [
        {
            id: 1,
            nombre: "Periféricos",
            precioMin: 50.00,
            precioMax: 200.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                { nombre: "Teclado Mecánico RGB", imgUrl: "../public/images/Teclado Mecánico RGB.webp" },
                { nombre: "Mouse Gaming Inalámbrico", imgUrl: "../public/images/Mouse Gaming Inalámbrico Logitech.jpg" },
                { nombre: "Auriculares Gaming con Micrófono", imgUrl: "../public/images/Auriculares Gaming con Micrófono Razer.jpg" }
            ],
            descripcion: "Dispositivos adicionales que mejoran la experiencia de uso de una computadora.",
            popularidad: 4.5
        },
        {
            id: 2,
            nombre: "Monitores",
            precioMin: 100.00,
            precioMax: 600.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Monitor Gaming 27'' 144Hz",
                "Monitor UltraWide 34''"
            ],
            descripcion: "Pantallas de alta definición para visualizar el contenido de la computadora.",
            popularidad: 4.0
        },
        {
            id: 3,
            nombre: "Componentes",
            precioMin: 30.00,
            precioMax: 1200.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                { nombre: "Teclado Mecánico RGB", imgUrl: "../public/images/Teclado Mecánico RGB.webp" },
                { nombre: "Mouse Gaming Inalámbrico", imgUrl: "../public/images/Teclado Mecánico RGB.webp" },
                { nombre: "Auriculares Gaming con Micrófono", imgUrl: "../public/images/Teclado Mecánico RGB.webp" }
            ],
            descripcion: "Partes internas esenciales para el funcionamiento de una computadora.",
            popularidad: 4.8
        },
        {
            id: 4,
            nombre: "Mobiliario",
            precioMin: 100.00,
            precioMax: 500.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Silla Gaming Ergonómica",
                "Escritorio Ajustable"
            ],
            descripcion: "Muebles diseñados para proporcionar comodidad y soporte durante el uso de la computadora.",
            popularidad: 4.2
        },
        {
            id: 5,
            nombre: "Almacenamiento",
            precioMin: 20.00,
            precioMax: 300.00,
            enTemporadaDeDescuento: true,
            productosDestacados: [
                { nombre: "Teclado Mecánico RGB", imgUrl: "../public/images/Teclado Mecánico RGB.webp" },
                { nombre: "Mouse Gaming Inalámbrico", imgUrl: "../public/images/Teclado Mecánico RGB.webp" },
                { nombre: "Auriculares Gaming con Micrófono", imgUrl: "../public/images/Teclado Mecánico RGB.webp" }
            ],
            descripcion: "Dispositivos utilizados para guardar y transportar datos digitales.",
            popularidad: 4.3
        },
        {
            id: 6,
            nombre: "Audio",
            precioMin: 30.00,
            precioMax: 200.00,
            enTemporadaDeDescuento: false,
            productosDestacados: [
                "Altavoces Bluetooth",
                "Auriculares Inalámbricos"
            ],
            descripcion: "Equipos para la reproducción y grabación de sonido.",
            popularidad: 4.6
        }
    ];
}
