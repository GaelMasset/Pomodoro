let tempsEtudeChoisi = 600;
let tempsPauseChoisi = 20;

let decompte = tempsEtudeChoisi;
let actif = false;
let auTravail = false;

function startPomodoro(){
    if(!actif){
        actif = true;
        auTravail = true;
        var image = document.getElementById("soleil");
        image.classList.add("rotate");
    }else{
        actif = false;
        var image = document.getElementById("soleil");
        image.classList.remove("rotate");
        auTravail=false;
    }
    updateCompteur();
}

let texte = Math.floor(decompte/60) + " : " + decompte%60;

setInterval(updateCompteur, 1000);

function updateCompteur(){
    if(actif){
        decompte --;
        texte = Math.floor(decompte/60) + " : " + decompte%60;
        document.getElementById("compteur").innerHTML = texte;
        if(decompte < 0 && auTravail){
            decompte = tempsPauseChoisi;
            auTravail = false;
        } else if (decompte < 0 && !auTravail){
            decompte = tempsEtudeChoisi;
            auTravail = true;
        }
        if(auTravail){
            document.getElementById("texteOrdre").innerHTML = "Au travail !!!"
        } else {
            document.getElementById("texteOrdre").innerHTML = "Tu peux te reposer !"
        }
    }
    else {
        decompte = tempsEtudeChoisi;
        texte = Math.floor(decompte/60) + " : " + decompte%60;
        document.getElementById("compteur").innerHTML = texte;
        document.getElementById("texteOrdre").innerHTML = "Appuies sur le bouton pour commencer"
    }

    
}

function plusTemps(){
    tempsEtudeChoisi += 60;
    updateCompteur();
}

function moinsTemps(){
    tempsEtudeChoisi -= 60;
    updateCompteur();
}
