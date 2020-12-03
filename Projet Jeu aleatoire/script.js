// 1. Générer un nombre aléatoire entre 1 et 1000.
// 2. Stocker le nombre de tours déjà joués. Commencer par 1.
// 3. Fournir au joueur le moyen de saisir un nombre.
// 4. Récupérer le nombre saisi par le joueur.
// 5. Vérifier si le nombre saisi par le joueur est correct.
// 6. S'il est correct :
//    1. Afficher un message de félicitations.
//    2. Empêcher que le joueur saisisse de nouveau un nombre.
//    3. Afficher un contrôle pour que le joueur puisse rejouer.
// 7. S'il est faux et que le joueur a encore des tours à jouer :
//    1. Informer le joueur que sa proposition de nombre est fausse.
//    2. Lui permettre d'entrer une nouvelle proposition de nombre.
//    3. Incrémenter le nombre de tours de 1.
// 8. S'il est faux et que le joueur n'a plus de tours à jouer :
//    1. Informer le joueur qu'il a perdu et que la partie est finie.
//    2. Empêcher que le joueur saisisse de nouveau un nombre.
//    3. Afficher un contrôle pour que le joueur puisse rejouer.
// 9. Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(random(1, 1000))

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes : ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber){
        lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 20) {
        lastResult.textContent = 'Perdu !';
        setGameOver();
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop petit !';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop grand !';
        }
    }

    guessCount++;
    guessField.value = '';
    guessFieldField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Démarrer une nouvelle partie';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame)
}

function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i=0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');
// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//   let userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = 'Previous guesses: ';
//   }

//   guesses.textContent += userGuess + ' ';

//   if (userGuess === randomNumber) {
//     lastResult.textContent = 'Congratulations! You got it right!';
//     lastResult.style.backgroundColor = 'green';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = '!!!GAME OVER!!!';
//     lowOrHi.textContent = '';
//     setGameOver();
//   } else {
//     lastResult.textContent = 'Wrong!';
//     lastResult.style.backgroundColor = 'red';
//     if(userGuess < randomNumber) {
//       lowOrHi.textContent = 'Last guess was too low!' ;
//     } else if(userGuess > randomNumber) {
//       lowOrHi.textContent = 'Last guess was too high!';
//     }
//   }

//   guessCount++;
//   guessField.value = '';
//   guessField.focus();
// }

// guessSubmit.addEventListener('click', checkGuess);

// function setGameOver() {
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   resetButton = document.createElement('button');
//   resetButton.textContent = 'Start new game';
//   document.body.appendChild(resetButton);
//   resetButton.addEventListener('click', resetGame);
// }

// function resetGame() {
//   guessCount = 1;
//   const resetParas = document.querySelectorAll('.resultParas p');
//   for(let i = 0 ; i < resetParas.length ; i++) {
//     resetParas[i].textContent = '';
//   }

//   resetButton.parentNode.removeChild(resetButton);
//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = '';
//   guessField.focus();
//   lastResult.style.backgroundColor = 'white';
//   randomNumber = Math.floor(Math.random() * 100) + 1;
// }
