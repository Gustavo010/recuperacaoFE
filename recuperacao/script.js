
function clicar() {
    let ctipo = document.getElementById("ctipo").value;

    let mens = document.getElementById("mens").value;

    let card = document.createElement("div");

    card.className = "card";
    card.style.width = "30vw";
    card.style.height = "10vh";
    card.style.color="white";
    card.style.border = "1px solid white";
    card.style.borderRadius = "10px";
    card.style.padding = "8px";
    card.style.fontFamily = "arial";
    card.style.fontWeight = "bold";
    card.style.textAlign = "center";
    card.style.marginTop = "10px";
    card.style.marginLeft = "620px"

    let text = document.createElement("p");
    text.innerHTML = ctipo;
    let text2 = document.createElement("p");
    text2.innerHTML = mens;
    
    let text3 = document.createElement("p");
    text3.innerHTML = "X";
    text3.style.backgroundColor = "#FF8C00"
    text3.style.color = "black"
    text3.style.fontFamily = "arial";
    text3.style.marginLeft = "500px"
    
    text3.addEventListener("click",() =>{
        card.remove()
    })
   
    card.appendChild(text);
    card.appendChild(text2);
    card.appendChild(text3);
    
    document.body.appendChild(card);

    if( ctipo == "Normal"){
        card.style.backgroundColor = "grey"
    }

    if( ctipo == "Urgente"){
        card.style.backgroundColor = "Red"
    }

    if( ctipo == "Importante"){
        card.style.backgroundColor = "Blue";
        card.style.color = "Red"
    }

}

//Apaga registro pelo button
function apagarButton(element) {
    element.parentNode.parentNode.remove();
}
