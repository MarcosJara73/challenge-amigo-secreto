// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos =[];


function agregarAmigo(){
    let agregarAmigo = document.getElementById('amigo').value;
    if (agregarAmigo === '') {
        alert("Falta Ingresar un Nombre");
    } else {
        if (amigos.includes(agregarAmigo)){
            alert("El Nombre ya fue ingresado");
        }else {
            amigos.push(agregarAmigo);
            actualizarLista();

            document.querySelector('#amigo').value="";
            //agregarAmigo.value="";
            //agregarAmigo.focus();
        }
     }
    
    console.log(amigos);
}

function actualizarLista() {
    const listaAmigosUl = document.getElementById('listaAmigos')
    listaAmigosUl.innerHTML ="";

    amigos.forEach(amigo => {
        const li =document.createElement('li');
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    }
    );
    }


function seleccionDatoAlAzar(datos){
    return datos[Math.floor(Math.random() * datos.length)]
 }



function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay nombres de amigos para sortear")
        return
    }
    let amigoSecreto = seleccionDatoAlAzar(amigos);
    console.log(amigoSecreto);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML=`<li> ${amigoSecreto}</li>`;


}
 