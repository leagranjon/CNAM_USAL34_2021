// Ingrédients :
// - Eau
// - Pâtes

// Ustensiles :
// - Casserole
// - Passoire
// - Plaque de cuisson

// Actions :
// => Remplir la casserole d'eau

// => Faire bouillir
//   Si la casserole a de l'eau

// => Mettre des pâtes
//   Si la casserole a de l'eau
//   Si l'eau boue

// => Égoutter les pâtes
//   Si la casserole a de l'eau
//   Si l'eau boue
//   Si les pâtes sont cuites

                //----------------------------------------------//

let putWater = document.querySelector("#putWater");
let boilWater = document.querySelector("#boilWater");
let putPasta = document.querySelector("#putPasta");
let drainPasta = document.querySelector("#drainPasta");

let filled = false;
let boiled = false;
let added = false;
let drained = false;

putWater.addEventListener("click", function() {
    if(filled === true) {
        console.log("L'eau est deja dans la casserole");
    } else {
        console.log("Je met de l'eau dans la casserole");
        filled = true;
    }
})

boilWater.addEventListener("click", function() {
    if(boiled === true) {
        console.log("L'eau est déjà en train de bouillir dans la casserole");
    } 
    else if (filled === false) {
        console.log("Il n'y a pas d'eau dans la casserole");
    } 
    else {
        console.log("L'eau bouillit dans la casserole");
        boiled = true;
    }
})

putPasta.addEventListener("click", function() {
    if(added === true) {
        console.log("Les pâtes sont déjà dans la casserole")
    }
    else if(filled === false) {
        console.log("Il n'y a pas d'eau dans la casserole");
    }
    else if(boiled === false) {
        console.log("L'eau ne bouillit pas dans la casserole");
    }
    else {
        console.log("On ajoute les pâtes dans la casserole");
        added = true;
    }
})

drainPasta.addEventListener("click", function() {
    if(drained === true) {
        console.log("Les pâtes sont déjà égoutter");
    }
    else if(filled === false) {
        console.log("Il n'y a pas d'eau dans la casserole");
    }
    else if(boiled === false) {
        console.log("L'eau ne bouillit pas dans la casserole");
    }
    else if(added === false) {
        console.log("Les pâtes ne sont pas dans la casserole");
    }
    else {
        console.log("Les pâtes sont cuites, on peut les égoutter");
        drained = true;
    }
})
