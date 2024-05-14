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
const seul          = document.querySelector('.seul');   

//------------------------------------------------------------------------
// On définit un evenement CLICK sur le carré 200x200
// On execute la fonction "afficheInfos" si on clique sur le carré
carre1.addEventListener('click', afficheInfosCarre1);
carre2.addEventListener('click', afficheInfosCarre2);
carre3.addEventListener('click', afficheInfosCarre3);
carre4.addEventListener('click', afficheInfosCarre4);
//------------------------------------------------------------------------


//********************************************************************************************//
//                               FONCTION AFFICHEINFOS                                        //
//********************************************************************************************//
function afficheInfosCarre1() {
    const nomBgColor1           = window.getComputedStyle(carre1).backgroundColor;
    recupCouleur.textContent    = nomBgColor1;
    seul.style.backgroundColor  = nomBgColor1;
}
function afficheInfosCarre2() {
    const nomBgColor2           = window.getComputedStyle(carre2).backgroundColor;
    recupCouleur.textContent    = nomBgColor2;
    seul.style.backgroundColor  = nomBgColor2;
}
function afficheInfosCarre3() {
    const nomBgColor3           = window.getComputedStyle(carre3).backgroundColor;
    recupCouleur.textContent    = nomBgColor3;
    seul.style.backgroundColor  = nomBgColor3;
}
function afficheInfosCarre4() {
    const nomBgColor4           = window.getComputedStyle(carre4).backgroundColor;
    recupCouleur.textContent    = nomBgColor4;
    seul.style.backgroundColor  = nomBgColor4;
}