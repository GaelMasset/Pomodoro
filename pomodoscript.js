let decompte = 1500;
let actif = false;
function startPomodoro(){
    if(!actif){
        actif = true;
    }else{
        actif = false;
    }
}

let texte = decompte / 60 + " : " + decompte%60;

setInterval(function(){
    if(actif){
        decompte --;
        texte = ((decompte / 60).toFixed(0))-1 + " : " + decompte%60;
        document.getElementById("compteur").innerHTML = texte;
    }
    else {
        decompte = 1500;
        texte = ((decompte / 60).toFixed(0)) + " : " + decompte%60;
        document.getElementById("compteur").innerHTML = texte;
    }
}, 1000);

