let carrito = [];

const json = [{
    "id": 1,
    "imgsrc": "img/blog-1.jpg",
    "imgMuestraSrc": "img/blog-1.jpg",
    "nombre": "AMERICANA",
    "precio": 480,
    "descripcion": "Medallon de Carne - Cheddar - Cebolla Caramelizada - Huevo - Panceta - BBQ"
}, {
    "id": 2,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "DOBLE CHEESE",
    "precio": 510,
    "descripcion": "Doble Carne - Doble Cheddar - Bacon - Aderezo de la Casa"
}, {
    "id": 3,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "TRIPLETE",
    "precio": 550,
    "descripcion": "Triple Carne - Triple Cheddar - Aderezo de la Casa"
}, {
    "id": 4,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": 'GRAN "B"',
    "precio": 510,
    "descripcion": "Doble Carne - Cuatriple Cheddar - Cebolla - Ketchup"
}, {
    "id": 5,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "FULL CLASIC",
    "precio": 400,
    "descripcion": "Medallon de Carne - Pepinillo - Lechuga - Tomate - Aderezo de la Casa"
}, {
    "id": 6,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "VEGGIE BROS",
    "precio": 380,
    "descripcion": "Sin Carne pero con todo el Sabor de una Burguer"
}, {
    "id": 7,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": 'GRAN "BB"',
    "precio": 680,
    "descripcion": "Cuatriple Medallon - Cheddar - Ketchup - Cebolla en cubo"
}, {
    "id": 8,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "LA BESTIA",
    "precio": 700,
    "descripcion": "Cuatriple Medallon - Cheddar - Cebolla Caramelizada - Panceta - BBQ"
}, {
    "id": 9,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "AMERICAN BEST",
    "precio": 510,
    "descripcion": "Quintuple Medallon - Cheddar - Panceta - BBQ - Cebolla Caramelizada"
}, {
    "id": 10,
    "imgsrc": "img/menu-burger.jpg",
    "imgMuestraSrc": "img/menu-burger-img.jpg",
    "nombre": "TRIPLE CHESSE BACON",
    "precio": 600,
    "descripcion": "Triple Carne - Triple Cheddar - Triple Bacon - Triple Aderezo"
}, ]
json.forEach(elem => {
    carrito.push({ "id": elem.id, "nombre": elem.nombre, "precio": elem.precio, "cantidad": 0 });
});

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
    strong.innerHTML = '$' + elem.precio;
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
                item.cantidad += 1;
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

function verCarrito() {
    if (comprobarSiEstaVacio()) {

        let total = 0;
        let precio;
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
                span = document.createElement('span');
                span.className = 'col';
                precio = document.createElement('strong');
                precio.className = 'col';
                cantidad = document.createElement('strong');
                cantidad.className = 'col';

                span.innerHTML = elem.nombre;
                precio.innerHTML = '$' + elem.precio;
                cantidad.innerHTML = 'cantidad: ' + elem.cantidad;
                h3.appendChild(span);
                h3.appendChild(precio);
                h3.appendChild(cantidad);

                menuText.appendChild(h3);

                menuItem.appendChild(menuText)

                nuevocarritoModalBody.appendChild(menuItem);
                total += elem.precio * elem.cantidad;
            }
        });
        menuItem = document.createElement('div');
        menuItem.className += 'menu-item menu-item-custom';
        menuText = document.createElement('div');
        menuText.className += 'menu-text';
        h3 = document.createElement('h3');
        h3.className += 'h3-custom row';
        precio = document.createElement('strong');
        precio.className = 'btn';
        precio.style.color = '#ffffff';
        precio.innerHTML = 'Total: $' + total;
        h3.appendChild(precio);
        menuText.appendChild(h3);
        menuItem.appendChild(menuText)
        nuevocarritoModalBody.appendChild(menuItem);

        $('.hidden').removeClass("hidden")
    } else {
        $('.hidden').addClass("hidden")
    }

}

function comprobarSiEstaVacio() {
    let b = false;
    carrito.forEach(elem => {
        if (elem.cantidad > 0) b = true;
    });
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
        window.open('https://wa.me/+543865513846/?text=' + text);

        $('.error').addClass("errorHidden")
    } else {
        $('.error').removeClass("errorHidden")
    }
}