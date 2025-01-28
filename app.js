// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Implementación del array
let amigos = [];

//Función para agregar amigos
function agregarAmigo() {
//capturar el valor de entrada
let nombreDeAmigos = document.getElementById('amigo').value;
// Validar la entrada
if (nombreDeAmigos==''){
    alert('Por favor inserte un nombre');
    } else {
        //Actualizar el array de amigos
        amigos.push(nombreDeAmigos);
        document.getElementById('amigo').value = '';
    }
    actualizaListaDeAmigos();
}

//Funcion para limpiar 
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// Función para actualizar la lista de amigos en la interfaz HTML
function actualizaListaDeAmigos() {
    // Seleccionar el <ul> donde se mostrarán los amigos
    let lista = document.getElementById('listaAmigos'); 

    // Limpiar la lista antes de agregar los nuevos nombres de tus amigos
    lista.innerHTML = '';

    // Iterar sobre el array de amigos y agregar cada uno como un <li>
    amigos.forEach((amigo) => {
        let li = document.createElement('li');  // Crear un nuevo <li>
        li.textContent = amigo;  // Establecer el nombre del amigo como texto del <li>
        lista.appendChild(li);  // Añadir el <li> a la lista
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Comprobar si hay amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, agrega al menos el nombre de un amigo.");
        return;  
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);  
    let amigoSorteado = amigos[indiceAleatorio];  // Obtener el amigo sorteado usando el índice aleatorio

    // Mostrar el amigo sorteado en el HTML
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}