const json = [{
    "id": 1,
    "imgsrc": "img/blog-1.jpg",
    "imgMuestraSrc": "img/blog-1.jpg",
    "nombre": "AMERICANA",
    "etiqueta": 'Burguers',
    "descripcion": "Medallon de Carne - Cheddar - Cebolla Caramelizada - Huevo - Panceta - BBQ"
}, {
    "id": 2,
    "imgsrc": "img/menu-doblecheese.jpg",
    "imgMuestraSrc": "img/menu-doblecheese-img.jpg",
    "nombre": "DOBLE CHEESE",
    "etiqueta": 'Burguers',
    "descripcion": "Doble Carne - Doble Cheddar - Bacon - Aderezo de la Casa"
}, {
    "id": 3,
    "imgsrc": "img/menu-TRIPLETE.jpg",
    "imgMuestraSrc": "img/menu-TRIPLETE-img.jpg",
    "nombre": "TRIPLETE",
    "etiqueta": 'Burguers',
    "descripcion": "Triple Carne - Triple Cheddar - Aderezo de la Casa"
}, {
    "id": 4,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": 'GRAN "B"',
    "etiqueta": 'Burguers',
    "descripcion": "Doble Carne - Cuatriple Cheddar - Cebolla - Ketchup"
}, {
    "id": 5,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "FULL CLASIC",
    "etiqueta": 'Burguers',
    "descripcion": "Medallon de Carne - Pepinillo - Lechuga - Tomate - Aderezo de la Casa"
}, {
    "id": 6,
    "imgsrc": "img/menu-veggie.jpg",
    "imgMuestraSrc": "img/menu-veggie-img.jpg",
    "nombre": "VEGGIE BROS",
    "etiqueta": 'Burguers',
    "descripcion": "Sin Carne pero con todo el Sabor de una Burguer"
}, {
    "id": 7,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": 'GRAN "BB"',
    "etiqueta": 'Extrem Line',
    "descripcion": "Cuatriple Medallon - Cheddar - Ketchup - Cebolla en cubo"
}, {
    "id": 8,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "LA BESTIA",
    "etiqueta": 'Extrem Line',
    "descripcion": "Cuatriple Medallon - Cheddar - Cebolla Caramelizada - Panceta - BBQ"
}, {
    "id": 9,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "AMERICAN BEST",
    "etiqueta": 'Extrem Line',
    "descripcion": "Quintuple Medallon - Cheddar - Panceta - BBQ - Cebolla Caramelizada"
}, {
    "id": 10,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "TRIPLE CHESSE BACON",
    "etiqueta": 'Extrem Line',
    "descripcion": "Triple Carne - Triple Cheddar - Triple Bacon - Triple Aderezo"
}, ]

let containerMenu
let menuItem
let divimg
let img
let menuText
let h3
let span
let strong
let p
let divcarrito
let btncarrito
let icocarrito

let imagenMuestra = document.getElementById('imgMuestra');
////
containerMenu = document.getElementById('containerMenu');

json.forEach(elem => {
    menuItem = document.createElement('div');
    menuItem.className += 'menu-item';

    divimg = document.createElement('div');
    img = document.createElement('img');
    img.src = elem.imgsrc;
    divimg.className += 'menu-img';
    divimg.appendChild(img);
    divimg.addEventListener('click', () => {
        imagenMuestra.src = elem.imgMuestraSrc;
    })

    menuItem.appendChild(divimg);

    menuText = document.createElement('div');
    menuText.className += 'menu-text';
    h3 = document.createElement('h3');
    span = document.createElement('span');
    strong = document.createElement('strong');
    p = document.createElement('p');

    p.innerHTML = elem.descripcion;
    span.innerHTML = elem.nombre;
    strong.innerHTML = '$' + elem.etiqueta;
    h3.appendChild(span);
    h3.appendChild(strong);

    menuText.appendChild(h3);
    menuText.appendChild(p);

    menuItem.appendChild(menuText)

    divcarrito = document.createElement('div');
    divcarrito.className += 'row justify-content-end';
    btncarrito = document.createElement('button');
    btncarrito.className += 'btn custom-btn-carrito col-1';
    btncarrito.id = elem.id;
    btncarrito.href = "menu.html";
    icocarrito = document.createElement('i');
    icocarrito.className += 'fas fa-cart-plus';
    icocarrito.style.color = '#ffffff';
    icocarrito.id = elem.id;

    btncarrito.addEventListener('click', (e) => {
        carrito.forEach(item => {
            if (e.target.id == item.id) {

                item.cantidad = prompt('Ingrese la cantidad');
            }
        });
        sumarAlContador();
    })

    btncarrito.appendChild(icocarrito);
    divcarrito.appendChild(btncarrito);
    menuItem.appendChild(divcarrito);

    containerMenu.appendChild(menuItem);
});

function sumarAlContador() {
    let cont = 0;
    let divcontador = document.getElementById('contador');
    carrito.forEach(item => {
        if (item.cantidad > 0) {
            cont += 1;
        }
    });
    divcontador.innerHTML = cont;
}

function verCarrito(renderizar) {
    if (comprobarSiEstaVacio() || renderizar) {

        let total = 0;
        let etiqueta;
        let cantidad;
        let carritoModalBody = document.getElementById('CarritoModalBody');

        let padre = document.getElementById('padre');
        padre.removeChild(carritoModalBody);

        let nuevocarritoModalBody = document.createElement('div');
        nuevocarritoModalBody.className += 'modal-body col-lg-7 col-md-12'
        nuevocarritoModalBody.id = 'CarritoModalBody';
        padre.appendChild(nuevocarritoModalBody);


        carrito.forEach(elem => {
            if (elem.cantidad > 0) {
                menuItem = document.createElement('div');
                menuItem.className += 'menu-item menu-item-custom';

                menuText = document.createElement('div');
                menuText.className += 'menu-text';
                h3 = document.createElement('h3');
                h3.className += 'h3-custom row';
                h3.style.alignItems = 'center';
                span = document.createElement('span');
                span.className = 'col';
                etiqueta = document.createElement('strong');
                etiqueta.className = 'col';
                cantidad = document.createElement('strong');
                cantidad.className = 'col';

                span.innerHTML = elem.nombre;
                etiqueta.innerHTML = '$' + elem.etiqueta;
                cantidad.innerHTML = 'cantidad: ' + elem.cantidad;
                h3.appendChild(span);
                h3.appendChild(etiqueta);
                h3.appendChild(cantidad);

                //agregar btn de borar
                divBorrar = document.createElement('div');
                divBorrar.className += 'col';
                btnBorrar = document.createElement('button');
                btnBorrar.className += 'btn custom-btn-carrito';
                btnBorrar.id = elem.id;
                btnBorrar.href = "menu.html";
                icoBorrar = document.createElement('i');
                icoBorrar.className += 'fas fa-trash-alt';
                icoBorrar.style.color = '#ffffff';
                icoBorrar.id = elem.id;

                btnBorrar.addEventListener('click', (e) => {
                    carrito.forEach(item => {
                        if (e.target.id == item.id) {

                            item.cantidad = 0;
                            verCarrito(true);
                        }
                    });
                    sumarAlContador();
                })
                btnBorrar.appendChild(icoBorrar);
                divBorrar.appendChild(btnBorrar);

                h3.appendChild(divBorrar);

                menuText.appendChild(h3);
                menuItem.appendChild(menuText);
                nuevocarritoModalBody.appendChild(menuItem);

                total += elem.etiqueta * elem.cantidad;
            }
        });
        menuItem = document.createElement('div');
        menuItem.className += 'menu-item menu-item-custom';
        menuText = document.createElement('div');
        menuText.className += 'menu-text';
        h3 = document.createElement('h3');
        h3.className += 'h3-custom row';
        etiqueta = document.createElement('strong');
        etiqueta.className = 'btn';
        etiqueta.style.color = '#ffffff';
        etiqueta.innerHTML = 'Total: $' + total;
        h3.appendChild(etiqueta);
        menuText.appendChild(h3);
        menuItem.appendChild(menuText)
        nuevocarritoModalBody.appendChild(menuItem);

        $('.datosDelivery').removeClass("hidden")
    } else {
        $('.datosDelivery').addClass("hidden")
    }

}

function comprobarSiEstaVacio() {
    let b = false;
    carrito.forEach(elem => {
        if (elem.cantidad > 0) b = true;
    });
    console.log('b: ' + b)
    return b;
}

function hacerPedido(Apellido, Direccion) {
    if (comprobarSiEstaVacio() && Apellido != '' && Direccion != '') {

        let text = 'buenas noches, quisiera ordenar:%0A';
        carrito.forEach(elem => {
            if (elem.cantidad > 0) {
                text += elem.nombre + ' cantidad: ' + elem.cantidad + '%0A';
            }
        });
        text += 'mis datos son:' + '%0AApellido: ' + Apellido + ', ' + '%0ADireccion: ' + Direccion + '%0AEspero su confirmacion'
        window.open('https://wa.me/+543863568202/?text=' + text);

        $('.error').addClass("errorHidden")
    } else {
        $('.error').removeClass("errorHidden")
    }
}