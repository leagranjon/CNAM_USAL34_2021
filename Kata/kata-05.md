# Georges et le jeu de rôle

Georges, il aime bien les jeux de rôles. Il en a trouvé un sur internet et il a besoin de vous pour savoir quel héro choisir.

---

## Information

Le premier héro (hero1) est celui qui attaque le premier, l'ordre est donc important. Le combat s'arrête quand un des deux héros n'a plus de vie (health) et on renvoie le nom du héro.

## Code

function andTheWinnerIs(hero1, hero2) {
  while (hero1.health >= 0 && hero2.health >= 0) {
    hero2.health = hero2.health - hero1.attack
    if (hero2.health >= 0) {
      hero1.health = hero1.health - hero2.attack
    }
  }
  if(hero2.health >= 0) {
    return hero2.name
  }
  return hero1.name
}

andTheWinnerIs(
  { name: "Medusa", health: 1090, attack: 50 },
  { name: "Pudge", health: 3010, attack: 10 }
); // Medusa
andTheWinnerIs(
  { name: "Zeus", health: 1210, attack: 30 },
  { name: "Viper", health: 1230, attack: 30 }
); // Zeus
andTheWinnerIs(
  { name: "Jakiro", health: 1020, attack: 50 },
  { name: "Lich", health: 210, attack: 340 }
); // Lich
andTheWinnerIs(
  { name: "Chen", health: 4000, attack: 22 },
  { name: "Bane", health: 3000, attack: 34 }
); // Bane
andTheWinnerIs(
  { name: "Viper", health: 1230, attack: 30 },
  { name: "Zeus", health: 1210, attack: 30 }
); // Viper
andTheWinnerIs(
  { name: "Mirana", health: 980, attack: 28 },
  { name: "Ursa", health: 1160, attack: 23 }
); // Mirana
```
