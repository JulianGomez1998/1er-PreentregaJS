

alert("HOLA! :) , Bienvenido a nuestra tienda online, aqui encontraras nuestros mejores productos en indumientaria unisex de nuestro propio diseño, principalmente diseños oversize, y urbano.")

//VARIABLES

let repetir = false
let usuarioRegistrado = ""
let contraseñaRegistrada = ""
let contador = 0
let inicioCorrecto = false
let acumuladorProductos = 0
let acumuladordePrecios = 0
let total = 0




//FUNCIONES


function productos(categorias) {
    categorias = Number(prompt("Nuestras Categorías \n1-Remeras \n2-Buzos \n3-Pantalones \n4-Carro \n5-Salir"))
    return categorias
}

function remeras(opciones) {
    opciones = Number(prompt("Modelos\n1-Remera M512 $7.500\n2-Remera Matt $10.000\n3-Remera M504 $8.700\n4-Remera Doors $8.300\n5-Volver"))
    return opciones
}

function buzos(opciones) {
    opciones = Number(prompt("Modelos\n1-Buzo polar $17.500\n2-Buzo KV $20.000\n3-Buzo Ryan $27.500\n4-Buzo Blessed $33.000\n5-Volver"))
    return opciones
}

function pantalones(opciones) {
    opciones = Number(prompt("Modelos\n1-Jogging Gris $20.000\n2-Jogging Negro $20.000\n3-Jogger Duncan $21.500\n4-Jogging M501 $20.000\n5-Volver"))
    return opciones
}

function carro(opciones) {
    opciones = Number(prompt("Modelos\n1-Pagar\n2-Vaciar\n3-Volver"))
    return opciones
}



//EJECUCION

do {
    alert("Registrate para ingresar a nuestro catalogo de productos!")
    usuarioRegistrado = prompt("REGISTRARSE. \nElige un nombre de usuario")
    contraseñaRegistrada = prompt("Elige tu contraseña")
    if (usuarioRegistrado == ("") || contraseñaRegistrada == ("")) {
        alert("Debes rellenar los campos")
    } else {
        alert("Has sido registrado con exito!")
    }
} while (usuarioRegistrado == ("") || contraseñaRegistrada == (""));

do {
    usuario = prompt("INICIO DE SESION. (Respeta estrictamente tus datos de registro)\nIngrese su usuario")
    contraseña = prompt("Ingrese su contraseña")
    contador++
    if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
        alert("Bienvenido " + usuario + "!")
        inicioCorrecto = true
        break
    } else {
        alert("Usuario y/o contraseña incorrecto/s")
    }
} while (contador < 3 && usuario != usuarioRegistrado || contraseña != contraseñaRegistrada);

if (contador === 3) {
    alert("Bloqueo de seguridad, volve mas tarde.")

}


if (usuario === usuarioRegistrado && contraseña === contraseñaRegistrada) {
    do {
        switch (productos()) {
            case 1:
                switch (remeras()) {
                    case 1:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 7500
                        break;
                    case 2:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 10000
                        break;
                    case 3:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 8700
                        break;
                    case 4:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 8300
                        break;
                    case 5:
                        break;
                    default:
                        alert("Opcion inexistente")
                        break;
                }
                break;
            case 2:
                switch (buzos()) {
                    case 1:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 17500
                        break;
                    case 2:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 20000
                        break;
                    case 3:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 27500
                        break;
                    case 4:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 33000
                        break;
                    case 5:
                        break;
                    default:
                        alert("Opcion inexistente")
                        break;
                }
                break;
            case 3:
                switch (pantalones()) {
                    case 1:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 20000
                        break;
                    case 2:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 20000
                        break;
                    case 3:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 21500
                        break;
                    case 4:
                        alert("Producto agregado al carro")
                        acumuladorProductos++
                        acumuladordePrecios += 20000
                        break;
                    case 5:
                    default:
                        alert("Opcion inexistente")
                        break;
                }
                break;
            case 4:
                if (acumuladorProductos == 0) {
                    alert("No tienes productos agregados al carrito")
                } else {
                    alert("Tienes " + acumuladorProductos + " Productos agregados al carrito\nCosto total de: $" + acumuladordePrecios)
                    switch (carro()) {
                        case 1:
                            acumuladorProductos = 0
                            acumuladorPrecio = 0
                            alert("Compra realizada con éxito!")
                            break;
                        case 2:
                            acumuladorProductos = 0
                            acumuladorPrecio = 0
                            alert("Se vacio el carrito")
                            alert("Regresando a la tienda")
                            break;
                        case 3:
                            alert("Regresando a la tienda")
                            break;
                        default:
                            alert("opcion incorrecta")
                            break;
                    }
                }
                break;
            case 5:
                repetir = true
                alert("Gracias por visitar nuestra tienda online, vuelve pronto!")
                break;
            default:
                alert("Opcion inexistente")
                break;
        }
    } while (repetir == false)
}
