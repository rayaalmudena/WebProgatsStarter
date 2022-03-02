let despedida = document.createElement("p");
despedida.textContent = "Gracias por visitar nuestra web!";
despedida.style.backgroundColor="pink";
despedida.appendChild(document.createElement("br"));
document.querySelector("body").appendChild(despedida);



let numG=numeroGatos;
while(numG>=1){
    let gato=document.createElement("img");
    gato.src="./img/logo.webp";
    gato.style.height="50px";
    despedida.appendChild(gato);
    numG= numG - 1;  
    console.log(numG);
}