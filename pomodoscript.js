let tempsEtudeChoisi = 60;

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

let texte = decompte / 60 + " : " + decompte%60;

setInterval(updateCompteur, 1000);

function updateCompteur(){
    if(actif){
        decompte --;
        texte = ((decompte / 60).toFixed(0))-1 + " : " + decompte%60;
        document.getElementById("compteur").innerHTML = texte;
        if(auTravail){
            document.getElementById("texteOrdre").innerHTML = "Au travail !!!"
        } else {
            document.getElementById("texteOrdre").innerHTML = "Tu peux te reposer !"
        }
    }
    else {
        decompte = tempsEtudeChoisi;
        texte = "25 : 00";
        document.getElementById("compteur").innerHTML = texte;
        document.getElementById("texteOrdre").innerHTML = "Appuies sur le bouton pour commencer"
    }

    
}

