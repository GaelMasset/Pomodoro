let tempsEtudeChoisi = 600;
let tempsPauseChoisi = 15;

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

    document.getElementById("tpsEtude").innerHTML = Math.floor(tempsEtudeChoisi/60) + " : " + tempsEtudeChoisi%60;
    document.getElementById("tpsPause").innerHTML = Math.floor(tempsPauseChoisi/60) + " : " + tempsPauseChoisi%60;



    
}

function plusTempsEtude(){
    tempsEtudeChoisi += 60;
    updateCompteur();
}

function moinsTempsEtude(){
    if(tempsEtudeChoisi <=60) return;
    tempsEtudeChoisi -= 60;
    updateCompteur();
}

function plusTempsPause(){
    tempsPauseChoisi += 15;
    updateCompteur();
}

function moinsTempsPause(){
    if(tempsPauseChoisi<=15) return;
    tempsPauseChoisi -= 15;
    updateCompteur();
}


