let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    //verifico que el campo de texto no se encuentre vacío al momento de que el usario haga click sobre el boton "Añadir"
    if (nombre === "") {
      alert("Por favor, inserte un nombre.");

    }  else {
        amigos.push(nombre);
        //limpio el campo de texto una vez introducido el nombre.
        document.getElementById('amigo').value = '';
        enlistarAmigos();
    }   
} 

//creo una función que añada a un elemento en HTML los nombres ingreados por el usuario.
function enlistarAmigos() {
    let listaNombresHTML = document.createElement('li');

    //limpio la lista para evitar que se agreguen nuevamente los nombres ya agregados previamente.
    listaNombresHTML.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) { 
    listaNombresHTML.textContent = amigos[i];
    document.getElementById("listaAmigos").appendChild(listaNombresHTML);
    }
}

/*creo una función que, primero verifique que el array no se encuentre vacio, y una vez confirmado
genere un indice aleatorio dentro del mismo para realizar el sorteo.*/
function sortearAmigo () {
    if (amigos.length > 0){

    //limpio todos los <li> que generamos dentro del <ul> en la función enlistarAmigos() para mostrar el mensaje del amigo sorteado de manera mas limpia.    
    document.getElementById('listaAmigos').innerHTML = '';
    
    let indiceAmigo = Math.floor(Math.random()*amigos.length);
    console.log(indiceAmigo);

    let sorteo = document.getElementById('resultado');
    sorteo.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAmigo]}`;

    } else {
        alert('Error, no hay amigos para sortear.');
    }
}
