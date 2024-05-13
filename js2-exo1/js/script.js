// JavaScript propose des boîtes de dialogue par défaut qui permettent d’interagir avec l'utilisateur. 
// Il en existe 3 types :
//    - Les alert() qui permettent d'afficher un message. 
//    - Les confirm() qui permettent de récupérer une valeur booléenne et 
//    - Les prompt() qui permettent de récupérer une valeur textuelle.

const container = document.querySelector('.container');

//------------------------------------------------------------------------
// On définit un evenement CLICK sur le carré 200x200
// On execute la fonction "afficheInfos" si on clique sur le carré
container.addEventListener('click', afficheInfos);
//------------------------------------------------------------------------


//********************************************************************************************//
//                               FONCTION AFFICHEINFOS                                        //
//********************************************************************************************//
// Code qui s'execute lorsque on clique sur le bouton "add a task"
function afficheInfos() {

    const nomClass      = container.className;
    const nomBgColor    = window.getComputedStyle(container).backgroundColor;
    const nomColor      = window.getComputedStyle(container).color;
    const nomHeight     = window.getComputedStyle(container).height;
    const nomWidth      = window.getComputedStyle(container).width;
    const nomDisplay    = window.getComputedStyle(container).display;    
    const nomFont       = window.getComputedStyle(container).font;    


    alert(
        "Class : " + nomClass + "\n" +
        " - BackGround color : " + nomBgColor + "\n" +
        " - Color : " + nomColor + "\n" +
        " - Height : " + nomHeight + "\n" + 
        " - Width : " + nomWidth + "\n" + 
        " - Display : " + nomDisplay + "\n" +
        " - Font : " + nomFont + "\n"
    );

}