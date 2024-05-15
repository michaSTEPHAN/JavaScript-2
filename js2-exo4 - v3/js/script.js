const main = document.querySelector('main');

// On récupère la couleur de fond de l'écran au-moment du clic
const couleurFondEcranIni = window.getComputedStyle(main).backgroundColor;

//---------------------------------------------------------------------------
// On récupere dans "e.target" le nom de l'élément sur lequel on a cliqué
//---------------------------------------------------------------------------
document.addEventListener('click', function(e) {
    
    // On récupère dans la variable "couleurFond" la couleur de fond de l'élément sur lequel on clique
    var couleurFond             = window.getComputedStyle(e.target).backgroundColor;
    var couleurFondEcranEnCours = window.getComputedStyle(main).backgroundColor;

    // On execute la "transformation1" sur le e.target récupéré
    e.target.classList.toggle('transformation1');

    // On gère la couleur de fond de l'écran
    if (couleurFond == couleurFondEcranEnCours) {
        main.style.backgroundColor = couleurFondEcranIni  ;           
    } else {
        main.style.backgroundColor = couleurFond;        
    }
    
}
, false);
