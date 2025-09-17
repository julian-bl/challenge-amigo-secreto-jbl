// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];


function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    //verificamos que el campo de texto no se encuentre vacio al momento de que el usario haga click sobre el boton "Añadir"
    if (nombre === "") {
      alert("Por favor, inserte un nombre.");

    }  else {
        listaDeAmigos.push(nombre);
        console.log(listaDeAmigos);
        enlistarAmigos();
        //limpiamos el campo de texto una vez introducido el nombre.
        document.getElementById('amigo').value = '';
    }
} 

function enlistarAmigos() {
    let listaNombresHTML = document.createElement('li');

    //limpiamos la lista para evitar que se agreguen nuevamente los nombres ya agregados previamente.
    listaNombresHTML.innerHTML = "";

    //creamos un bucle que  añade los elemenos contenidos en el array listaDeAmigos, a un elemento en HTML.
    for (let i = 0; i < listaDeAmigos.length; i++) { 
    listaNombresHTML.textContent = listaDeAmigos[i];
    document.getElementById("listaAmigos").appendChild(listaNombresHTML);
    }
}
