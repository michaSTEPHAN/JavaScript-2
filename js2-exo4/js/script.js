const facebook        = document.querySelector('.facebook');
const twitter         = document.querySelector('.twitter');
const instagram       = document.querySelector('.instagram');
const main            = document.querySelector('main');

//------------------------------------------------------------------------
// On définit un evenement CLICK sur les 3 carrés 
facebook.addEventListener('click', modifFacebook);
twitter.addEventListener('click', modifTwitter);
instagram.addEventListener('click', modifInstagram);
//------------------------------------------------------------------------

//********************************************************************************************//
//                               FONCTION MODIF ICONE                                         //          
//********************************************************************************************//

// On récupère la couleur d'origine du fond du carré
//const nomBgColorIni = window.getComputedStyle(facebook).backgroundColor;

// On définit la nouvelle couleur de fond à appliquer si on clique sur le carré
const nomBgNewColorFacebook   = "rgb(67, 96, 156)";
const nomBgNewColorTwitter    = "rgb(108, 173, 222)";
const nomBgNewColorInstagram  = "rgb(225, 48, 108)";

function modifFacebook() {
    facebook.classList.toggle('transformation1');

    const backGroundColor = main.style.backgroundColor
    console.log("backGroundColor ",backGroundColor)
    
    if (backGroundColor==nomBgNewColorFacebook) {
        console.log("IF");
        main.style.backgroundColor = "rgb(169,169,169)";    
    } else {
        console.log("ELSE");
        main.style.backgroundColor = nomBgNewColorFacebook;
    }
}

function modifTwitter() {

    twitter.classList.toggle('transformation1');

    const backGroundColor = main.style.backgroundColor
    console.log("backGroundColor ",backGroundColor)
    
    if (backGroundColor==nomBgNewColorTwitter) {
        console.log("IF");
        main.style.backgroundColor = "rgb(169,169,169)";    
    } else {
        console.log("ELSE");
        main.style.backgroundColor = nomBgNewColorTwitter;
    }


    // main.style.backgroundColor = nomBgNewColorTwitter;
    // twitter.classList.toggle('transformation1');
}

function modifInstagram() {

    instagram.classList.toggle('transformation1');

    const backGroundColor = main.style.backgroundColor
    console.log("backGroundColor ",backGroundColor)
    
    if (backGroundColor==nomBgNewColorInstagram) {
        console.log("IF");
        main.style.backgroundColor = "rgb(169,169,169)";    
    } else {
        console.log("ELSE");
        main.style.backgroundColor = nomBgNewColorInstagram;
    }

    // main.style.backgroundColor = nomBgNewColorInstagram;
    // instagram.classList.toggle('transformation1');
}