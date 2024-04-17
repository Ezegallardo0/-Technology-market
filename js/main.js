let burguer= document.getElementById("check")
let modal= document.getElementById("modal")
burguer.addEventListener("change",function(){
    if(burguer.checked){
        modal.style.visibility="visible";
    }else{
        modal.style.visibility="hidden"
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const carrito = []; // array que vamos a usar para agregar los productos

    function agregarAlCarrito(producto) { // declaramos función de agregar producto al carrito 
        carrito.push(producto); // método del array para agregar un producto al carrito
        actualizarCarrito(); // invocamos la función para que lea y actualice qué hay en nuestro carrito
    }

    function eliminarDelCarrito(index) { // declaramos función que elimina un producto del carrito
        carrito.splice(index, 1); // método del array para eliminar elemento del array
        actualizarCarrito();
    }

    function actualizarCarrito() {
        const carritoElemento = document.getElementById("carrito");
        const totalElemento = document.getElementById("total");

        carritoElemento.innerHTML = ""; // blanquear carrito

        let total = 0; // esta variable actúa como acumulador;

        carrito.forEach(function (producto, index) { // recorriendo los productos del carrito
            const div= document.createElement("div")
            div.style.display="flex"

            const li = document.createElement("li");
            li.textContent = producto.nombre + "-$" + producto.precio.toFixed(2);
            li.style.listStyle = "none";
            li.style.color="#17171d";

            const botonEliminar = document.getElementById("deletebutton"); // creamos el botón eliminar
            botonEliminar.style.display ="flex";
            botonEliminar.style.marginLeft = "20%";
            botonEliminar.addEventListener("click", function () { // creamos la función para eliminar un solo producto
                eliminarDelCarrito(index);
            });

            div.appendChild(li);
            div.appendChild(botonEliminar)
            li.appendChild(botonEliminar);
            carritoElemento.appendChild(div);
            li.style.display = 'inline-block';
            button.style.display = 'inline-block';

            total += producto.precio;
        });

        totalElemento.textContent = total.toFixed(2);
    }

    function vaciarCarrito() {
        carrito.length = 0;
        actualizarCarrito();
    }

    // traemos los botones
    const botonComprar = document.querySelectorAll(".agregar");
    const botonVaciarCarrito = document.querySelector("#vaciar_carrito");

    // agregar los eventos para que funcionen los botones

    botonComprar.forEach(function (boton, index) {
        boton.addEventListener("click", function () {
            const nombre = document.querySelectorAll("b")[index].textContent;
            const precioElemento = document.getElementById("precio-producto-" + (index + 1));
            const precio = parseFloat(precioElemento.textContent.replace("$", ""));

            agregarAlCarrito({ nombre, precio });
        });
    });

    botonVaciarCarrito.addEventListener("click", vaciarCarrito);

    const carritoIcono = document.getElementById("carrito-icono");
    const sectionCarrito = document.getElementById("div_carrito");

    carritoIcono.addEventListener("click", function () {
        if (sectionCarrito.style.display === "none") {
            sectionCarrito.style.display = "block";
        } else {
            sectionCarrito.style.display = "none";
        };
    });
});
