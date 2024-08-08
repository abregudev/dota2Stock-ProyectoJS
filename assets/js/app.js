// Trayendo los id de el HTML con DOOM y insertandolo en una variable.
const heroes = document.querySelector('#heroes')
const rareza = document.querySelector('#rareza')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')

// Creamos la variable mostrar_datos para luego ingresar los datos.
const mostrar_datos = document.querySelector('#mostrar_datos')

// Creamos el objeto para verificar luego.. ~!
const datosBusqueda = {
    heroe: '',
    rareza: '',
    minimo: '',
    maximo: '',
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarDatos(datosItems);
})

heroes.addEventListener('change', e => {
    datosBusqueda.heroe = e.target.value

    filtrarItems()
})

rareza.addEventListener('change', e => {
    datosBusqueda.rareza = e.target.value

    filtrarItems()
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = parseInt(e.target.value)

    filtrarItems()
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = parseInt(e.target.value)

    filtrarItems()
})



// Crear Funciones
function mostrarDatos(datos) {
    
    limpiarHTML()
    datos.forEach(dato => {
        const { heroe, rareza, precio, img, nombreItem} = dato
        
        const elementoHTML = `
            <div class="card-datos">
                <img src="${img}" alt="">
                <p class="heroe_name">${heroe}</p>
                <p class="rarezaItem">${rareza}</p>
                <p class="nombreItem">${nombreItem}</p>
                <p class="precio">S/${precio}</p>
            </div>
        `

        mostrar_datos.innerHTML += elementoHTML;
    })
}

function limpiarHTML() {
    while (mostrar_datos.firstChild) {
        mostrar_datos.removeChild(mostrar_datos.firstChild);
    }   
}

function filtrarItems() {
    const mostrar_datos = datosItems.filter(filtrarHeroe).filter(filtrarRareza).filter(filtrarMinimo).filter(filtrarMaximo)
    
    if (mostrar_datos.length) {
        mostrarDatos(mostrar_datos)
    } else {
        noResultado();
    }

}

function noResultado() {
    limpiarHTML();
    const mensaje = document.createElement('p');
    mensaje.textContent = 'NO HAY DATOS';
    mostrar_datos.appendChild(mensaje);
}


function filtrarHeroe(datosB) {
    const { heroe } = datosBusqueda;

    if ( heroe ) {
        return datosB.heroe === heroe
    }
    return true
}

function filtrarRareza(datosB) {
    const { rareza } = datosBusqueda;

    if ( rareza ) {
        return datosB.rareza === rareza
    }
    return true
}

function filtrarMinimo(datosB) {
    const { minimo } = datosBusqueda;

    if ( minimo ) {
        return datosB.precio >= minimo;
    }
    return true
}

function filtrarMaximo(datosB) {
    const { maximo } = datosBusqueda;

    if ( maximo ) {
        return datosB.precio <= maximo;
    }
    return true
}
