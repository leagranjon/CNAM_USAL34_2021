# Georges et l'astronomie

Georges a une passion, l'astronomie, parce que l'astronomie ça lui met des paillettes dans sa vie.

Kevin, un mec sympa, veut aider Georges et il lui a développé un petit script qui retourne le nom de la planète en fonction de sa position par rapport au soleil. Mais Kevin était pressé et n'a pas bien codé le script. Georges est tout triste et du coup vous allez aider Georges car vous êtes toujours de biens bonnes personnes. Vous allez corriger ce petit script pour qu'il puisse récupérer la bonne planète lorsqu'il envoie la bonne position. Bien sûr tout ça en anglais car il est bilingue le Georges !

## Exemple :

position = 1 ----> "Mercury"
position = 3 ----> "Earth"
position = 8 ---> "Neptune"

---

## Code

```js
function getPlanetName(position) {
  const planets = [
    "Earth",
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  let name;
  switch (position) {
    case 1:
      name = planets[1];
    case 2:
      name = planets[2];
    case 3:
      name = planets[3];
    case 4:
      name = planets[4];
    case 5:
      name = planets[5];
    case 6:
      name = planets[6];
    case 7:
      name = planets[7];
    case 8:
      name = planets[8];
  }
}

getPlanetName(1); // => "Mercury"
getPlanetName(3); // => "Earth"
getPlanetName(6); // => "Saturn"
```

## Informations et contraintes

- `1 >= position >= 8`
- Il faut absolument garder switch / case (lire la doc) et ne pas toucher à la constante `planets`
