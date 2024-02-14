// funksjon for burger rating og kommentar, for å legge ut teksten på nettsiden
function Reviewburger(){
    var kommentar = document.getElementById("kommentarBurger").value; // legger kommentar til bruker inn i varibel kommentar
    var review = document.getElementById("reviewBurger").value; // legger rating til bruker inn i variabel review 

    var result = "Vurdering: " + review + ", \nKommentar: " + kommentar; // struktur på hvordan kommentar og rating skal displayet på nettsiden, som blir satt inn i varibel result

    document.getElementById("burgerResponse").innerText = result; // displayer rating og kommentar på nettsiden
}


// funksjon for kebab rating og kommentar, for å legge ut teksten på nettsiden
function Reviewkebab(){
    var kommentar = document.getElementById("kommentarKebab").value; // legger kommentar til bruker inn i varibel kommentar
    var review = document.getElementById("reviewKebab").value; // legger rating til bruker inn i variabel review 

    var result = "Vurdering: " + review + ", \nKommentar: " + kommentar; // struktur på hvordan kommentar og rating skal displayet på nettsiden, som blir satt inn i varibel result

    document.getElementById("kebabResponse").innerText = result; // displayer rating og kommentar på nettsiden
} 


// funksjon for pizza rating og kommentar, for å legge ut teksten på nettsiden
function Reviewpizza(){
    var kommentar = document.getElementById("kommentarPizza").value; // legger kommentar til bruker inn i varibel kommentar
    var review = document.getElementById("reviewBurger").value; // legger rating til bruker inn i variabel review 

    var result = "Vurdering: " + review + ", \nKommentar: " + kommentar; // struktur på hvordan kommentar og rating skal displayet på nettsiden, som blir satt inn i varibel result

    document.getElementById("pizzaResponse").innerText = result; // displayer rating og kommentar på nettsiden
}



