// 1. Partie HTML (3 boutons avec 3 identifiants)
//  2. Sélectionnez les boutons
//  3. Au clic de l'utilisateur sur le bouton "Mettre de l'eau dans la casserole"
    // a. Vérifier qu'on est bien à la première étape
    // b. Si oui, on affiche dans la console "Je mets de l'eau dans la casserole" et je valide l 'étape 1
    // c. Sinon, on affiche "Euh l'eau est déjà dans la casserole..."
//  4. Au clic de l'utilisateur sur le bouton "Chauffer l'eau de la casserole"
    // a. Vérifier qu'on est bien à la seconde étape
    // b. Si oui, on affiche "Je chauffe l'eau" et je valide l 'étape 2
    // c. Sinon, si on est encore au début, on affiche "Bah il y a pas d'eau dans la casserole !"
    // d. Sinon, si on l'étape 2 est déjà validé, on affiche "C'est déjà chaud"
//  5. Au clic de l'utilisateur sur le bouton "Mettre les pâtes"
    // a. Vérifier qu'on est bien à la troixième étape
    // b. Si oui, on affiche "Je rajoute les pâtes", "C'est cuit, bon appétit !" et je valide l 'étape 3
    // c. Sinon, si on n'est pas l'étape 2, on affiche "Pas encore prêt pour rajouter les pâtes"

//  À faire plus tard, afficher les textes dans la page

// etape = 1 => Etape initiale, rien n'a été fait
// etape = 2 => L'eau est dans la casserole
// etape = 3 => L'eau a été chauffée
// etape = 4 => Les pâtes sont cuites
let etape = 1
let etape = 2
let etape = 3

let putWaterButton = document.querySelector("#putWater");
let boilWaterButton = document.querySelector("#boilWater");
let putPastaButton = document.querySelector("#putPasta");

putWaterButton.addEventListener("click", putWater);
boilWaterButton.addEventListener("click", boilWater);
putPastaButton.addEventListener("click", putPasta);

function putWater() {
    if (etape === 1) {
        console.log("Je met de l'eau dans la casserole");
        etape = 2; 
    }
    else if(etape === 2) {
        console.log("Euh l'eau est deja dans la casserole...");
    }
    else {
        console.log("Euh l'eau est deja dans la casserole...");
    }
}

function boilWater() {
    if (etape === 2) {
        console.log("Je chauffe l'eau");
        etape = 3;
    }
    else if (etape === 3) {
        console.log("J'ai déja chauffée l'eau");
    }
    else {
        console.log("Il faut d'abord mettre de l'eau dans la casserole");
    }
}

function putPasta() {
    if (etape ===3) {
        console.log("Je met les pâtes", "Bon app mon Khey");
        etape = 1;
    }
    else if (etape ===1) {
        console.log("Il faut d'abord mettre de l'eau");
    }
    else {
        console.log("Pas encore pret pour mettre les pates");
    }
}
etape === 1 // true or false
if (false) {
    //
}

let nothing // undefined