let ingredients = [
    { name: "Poireau", etat: 'initial' },
    { name: "Carotte", etat: 'initial' },
    { name: "Navet", etat: 'initial' },
    { name: "Branche de celeris", etat: 'initial' },
    { name: "Pomme de Terre", etat: 'initial' },
    { name: "Tomate", etat: 'initial' },
    { name: "Courgette", etat: 'initial' },
    { name: "Oignon", etat: 'initial' },
    { name: "Bouillon cube", etat: 'initial' },
    { name: "Crème fraiche", etat: 'initial' },
    { name: "Beurre", etat: 'initial' },
  ];
  let etape = 0
  
  function rafraichirAffichage() {
    document.body.innerHTML = ''
  
    let recetteTitle = document.createElement('h1')
    recetteTitle.textContent = "Soupe aux 7 légumes"
    document.body.appendChild(recetteTitle)
    
    let listeIngredients = document.createElement('ul')
    ingredients.forEach(function(ingredient) {
      let ingredientElement = document.createElement('li')
      ingredientElement.textContent = `${ingredient.name} (${ingredient.etat})`
      listeIngredients.appendChild(ingredientElement)
    })
    document.body.appendChild(listeIngredients);
  
    let pelerBouton = document.createElement('button')
    pelerBouton.textContent = "Peler"
    pelerBouton.setAttribute('id', 'peler')
    document.body.appendChild(pelerBouton)
    document.querySelector('#peler').addEventListener('click', peler)
  }
  rafraichirAffichage()

  function peler(){
    ingredients.forEach(function(ingredient){
      if (ingredient.categorie === 'legume' && ingredient.etat === 'initial') {
        ingredient.etat = "pelé"
      }
    })
    rafraichirAffichage()
  }