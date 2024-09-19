

let degreC = 35
let degreF = degreC * 9/5 + 32;

let longueur = 5
let largeur = 9

let prenom = "Jean"
let nom = "Dupont"

let prixHT= 50
let taxe = 0.2

let taille = 1.54
let poids = 110

let append = document.createElement("p");

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("par1").innerHTML = "<a href='t/a'> Valeur en degré Celcius : " + degreC +  "° soit " + degreF + "° Fahrenheit </a>";
    document.getElementById("par2").innerHTML = "Aire : " + longueur*largeur;
    document.getElementById("par3").innerHTML = "Monsieur : " + prenom + " " + nom;
    document.getElementById("par4").innerHTML = "Prix : " + prixHT + " , taxe de : " + taxe*100 + "%, soit " + (prixHT+prixHT*taxe) + " euros TTC";
    document.getElementById("par5").innerHTML = "Poids : " + poids + " et Taille : " + taille + " Donc imc de : " + (poids/(taille*taille));

    /*let reponse = prompt("Entre ton poids");
    let nouvPar = document.createElement("p");
    nouvPar.textContent = reponse;
    document.body.appendChild(nouvPar);
    
    append.textContent = "Je rajoute ca depuis Js"
    document.body.appendChild(append);*/

    let variable ="01001";
   
    document.getElementById("exo8").innerHTML =  "la variable en binaire: " + parseInt(variable) + " et sa convertion en décimale: "+ parseInt(variable,2);

});



function printpage() {
    console.log("lol")
}

let nbCommande = 0;
function moinsCommande(){
    nbCommande--;
    actualiserTexte();
}
function plusCommande(){
    nbCommande++;
    actualiserTexte();
    console.log("jappuie");
}
function actualiserTexte(){
    if(nbCommande > 3){
        document.getElementById("nbCom").innerHTML = "Nb de commande : " + nbCommande + " prix de livraison : gratuit";
    }
    else {
        document.getElementById("nbCom").innerHTML = "Nb de commande : " + nbCommande + " prix de livraison : " + nbCommande * 25;
    }

    
}