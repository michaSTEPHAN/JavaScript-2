// JavaScript propose des boîtes de dialogue par défaut qui permettent d’interagir avec l'utilisateur. 
// Il en existe 3 types :
//    - Les alert() qui permettent d'afficher un message. 
//    - Les confirm() qui permettent de récupérer une valeur booléenne et 
//    - Les prompt() qui permettent de récupérer une valeur textuelle.
const carre1        = document.querySelector('.carre1');
const carre2        = document.querySelector('.carre2');
const carre3        = document.querySelector('.carre3');
const carre4        = document.querySelector('.carre4');
const recupCouleur  = document.querySelector('.recupCouleur'); 

//------------------------------------------------------------------------
// On définit un evenement CLICK sur le carré 200x200
// On execute la fonction "afficheInfos" si on clique sur le carré
carre1.addEventListener('click', modifCarre1);
carre2.addEventListener('click', modifCarre2);
carre3.addEventListener('click', modifCarre3);
carre4.addEventListener('click', modifCarre4);
//------------------------------------------------------------------------


//********************************************************************************************//
//                               FONCTION MODIF CARRE                                         //          
//********************************************************************************************//

// On récupère la couleur d'origine du fond du carré
const nomBgColorIni = window.getComputedStyle(carre1).backgroundColor;
console.log ("nomBgColorIni : ", nomBgColorIni);

// On définit la nouvelle couleur de fond à appliquer si on clique sur le carré
const nomBgColorNew   = "rgb(255,153,153)";

function modifCarre1() {
    // On récupère la couleur en cours du carré
    const nomBgColorEnCours = window.getComputedStyle(carre1).backgroundColor;

    if (nomBgColorEnCours == nomBgColorIni) {
        carre1.style.backgroundColor = nomBgColorNew;
        carre1.classList.toggle('rotation1');
    } else {
        carre1.style.backgroundColor = nomBgColorIni;
        carre1.classList.toggle('rotation2');
    }
    
}
function modifCarre2() {
    const nomBgColorEnCours = window.getComputedStyle(carre2).backgroundColor;

    if (nomBgColorEnCours == nomBgColorIni) {
        carre2.style.backgroundColor = nomBgColorNew;
        carre2.classList.toggle('rotation1');
    } else {
        carre2.style.backgroundColor = nomBgColorIni;
        carre2.classList.toggle('rotation2');
    }
}
function modifCarre3() {
    const nomBgColorEnCours = window.getComputedStyle(carre3).backgroundColor;

    if (nomBgColorEnCours == nomBgColorIni) {
        carre3.style.backgroundColor = nomBgColorNew;
        carre3.classList.toggle('rotation1');
    } else {
        carre3.style.backgroundColor = nomBgColorIni;
        carre3.classList.toggle('rotation2');
    }
}
function modifCarre4() {
    const nomBgColorEnCours = window.getComputedStyle(carre4).backgroundColor;

    if (nomBgColorEnCours == nomBgColorIni) {
        carre4.style.backgroundColor = nomBgColorNew;
        carre4.classList.toggle('rotation1');
    } else {
        carre4.style.backgroundColor = nomBgColorIni;
        carre4.classList.toggle('rotation2');
    }
}