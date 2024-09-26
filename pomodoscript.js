let tempsEtudeChoisi = 600;
let tempsPauseChoisi = 15;

let decompte = tempsEtudeChoisi;
let actif = false;
let auTravail = false;

function startPomodoro(){
    if(!actif){
        actif = true;
        auTravail = true;
        var image = document.getElementById("boutonPlay");
        image.classList.remove('fa-play');
        image.classList.add('fa-rotate-right');
    }else{
        actif = false;
        auTravail=false;
        var image = document.getElementById("boutonPlay");
        image.classList.add('fa-play');
        image.classList.remove('fa-rotate-right');
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
        if(decompte <= 0 && auTravail){
            decompte = tempsPauseChoisi;
            auTravail = false;
        } else if (decompte <= 0 && !auTravail){
            decompte = tempsEtudeChoisi;
            auTravail = true;
        }
        if(auTravail){
            document.getElementById("texteOrdre").innerHTML = "Au travail !!!"
            document.getElementById("premierBloc").style.backgroundColor = "RED";
        } else {
            document.getElementById("premierBloc").style.backgroundColor = "GREEN";
        }
    }
    else {
        document.getElementById("premierBloc").style.backgroundColor = "#52796F";
        decompte = tempsEtudeChoisi;
        texte = Math.floor(decompte/60) + " : " + decompte%60;
        document.getElementById("compteur").innerHTML = texte;
        document.getElementById("texteOrdre").innerHTML = "Appuies sur le bouton pour commencer"
    }

    document.getElementById("tpsEtude").innerHTML = Math.floor(tempsEtudeChoisi/60) + " : " + tempsEtudeChoisi%60;
    document.getElementById("tpsPause").innerHTML = Math.floor(tempsPauseChoisi/60) + " : " + tempsPauseChoisi%60;



    
}

function plusTempsEtude(){
    if(tempsEtudeChoisi > 7170) return;
    tempsEtudeChoisi += 30;
    updateCompteur();
}

function moinsTempsEtude(){
    if(tempsEtudeChoisi <=30) return;
    tempsEtudeChoisi -= 30;
    updateCompteur();
}

function plusTempsPause(){
    if(tempsPauseChoisi > 7170) return;
    tempsPauseChoisi += 15;
    updateCompteur();
}

function moinsTempsPause(){
    if(tempsPauseChoisi<=15) return;
    tempsPauseChoisi -= 15;
    updateCompteur();
}


