const resultat  = document.getElementById('resultat');
const euros     = document.getElementById('euros');
const input     = document.getElementById('input');
const taux      = 6.55957;

//------------------------------------------------------------------------
// Sert à récupérer le montant saisit dans le champ euros
euros.addEventListener('input', conversionEurosFrancs);
//------------------------------------------------------------------------

//************************************************************************//
//  FONCTION CONVERSION EUROS EN FRANCS                                   //          
//************************************************************************//
function conversionEurosFrancs() {
    // On récupère la valeur saisie à l'ecran
    const montantEnEuros = euros.value; 

    // On test si le montant est numérique avant de faire le calcul
    if (!isNaN(montantEnEuros)) {
        const calcul = taux * euros.value;
        resultat.textContent = calcul.toFixed(2) + " francs";
      } else {
        resultat.textContent = "La valeur saisie n'est pas un nombre";
      }
}