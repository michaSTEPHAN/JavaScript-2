const recupCouleur  = document.querySelector('.recupCouleur'); 
const seul          = document.querySelector('.seul');  

//---------------------------------------------------------------------------
// On récupere dans "e.target" le nom de l'élément sur lequel on a cliqué
//---------------------------------------------------------------------------
document.addEventListener('click', function(e) {
    
    // On récupère dans la variable "couleurFond" la couleur de fond de l'élément sur lequel on clique
    var couleurFond = window.getComputedStyle(e.target).backgroundColor;
    
    // On modifie la couelur du carré du bas + on affiche le libellé de la couleur
    recupCouleur.textContent    = couleurFond;
    seul.style.backgroundColor  = couleurFond;
}
, false);