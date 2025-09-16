// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let nombre;

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    //verificamos que el campo de texto no se encuentre vacio al momento de que el usario haga click sobre el boton "Añadir"
    if (nombre === "") {
      alert("Por favor, inserte un nombre.");

    }  else {
        listaDeAmigos.push(nombre);
        console.log(listaDeAmigos);

        //limpiamos el campo de texto una vez introducido el nombre.
        document.getElementById('amigo').value = '';
    }
} 
