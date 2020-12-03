const generateMovieCard = (movie) => {
  const card = document.createElement("div");
  card.classList = "card";

  const title = document.createElement("h1");
  title.textContent = movie.title;
  card.appendChild(title);

  const metaContainer = document.createElement("div");
  metaContainer.classList = "card__meta";
  const releaseDate = document.createElement("span");
  releaseDate.classList = "card__release-date";
  releaseDate.textContent = `${movie.releaseDate}, ${movie.director}`;
  metaContainer.appendChild(releaseDate);
  card.appendChild(metaContainer);

  const actorsContainer = document.createElement("div");
  actorsContainer.classList = "card__actors";
  const actorsTitle = document.createElement("h3");
  actorsTitle.classList = "card__actors--title";
  actorsTitle.textContent = "Acteurs :";
  actorsContainer.appendChild(actorsTitle);
  const actors = document.createElement("ul");
  actors.classList = "card__actors--list";
  movie.actors.map((actor) => {
    const item = document.createElement("li");
    item.textContent = `${actor.firstname} ${actor.lastname} (${actor.birthdate})`;
    actors.appendChild(item);
  });
  actorsContainer.appendChild(actors);
  card.appendChild(actorsContainer);

  const genresContainer = document.createElement("div");
  genresContainer.classList = "card__genres";
  const genres = document.createElement("ul");
  genres.classList = "card__genres--list";
  movie.genres.map((genre) => {
    const item = document.createElement("li");
    item.textContent = genre;
    genres.appendChild(item);
  });
  genresContainer.appendChild(genres);
  card.appendChild(genresContainer);

  if (movie.favorite) {
    const favorite = document.createElement("div");
    favorite.innerHTML =
      '<svg class="favorite-icon" role="img" aria-hidden="true"><use xlink:href="#favorite-icon"></use></svg>';
    card.appendChild(favorite);
  }

  document.querySelector(".container").appendChild(card);
};


let movie1 = {
  title: "Retour vers le futur", // string
  releasedate: 1985, // number
  director: "Robert Zemeckis", // string
  genre: ["science-fiction", "adventure"], // array
  actors: [
          {firstname: "Michael ", lastname: "J. Fox", birthdate: 1961},
          {firstname: "Christopher ", lastname: "Lloyd", birthdate: 1938},
          {firstname: "Lea ", lastname: "Thompson", birthdate: 1961},
          {firstname: "Grispin ", lastname: "Glover", birthdate: 1964},
          {firstname: "Thomas ", lastname: "F. Wilson", birthdate: 1959},
  ], //array
  favorite: true, // boolean
};

let movie2 = {
  title: "Iron Man", // string
  releasedate: 2008, // number
  director: "Jon Favreau", // string
  genre: ["Science-Fiction", "Action"], // array
  actors: [
          {firstname: "Robert", lastname: "Downey Jr.", birthdate: 1965},
          {firstname: "Gwineth", lastname: "Paltrow", birthdate: 1972},
          {firstname: "Terrence", lastname: "Howard", birthdate: 1969},
          {firstname: "Jeff", lastname: "Bridges", birthdate: 1949},
  ], // array
  favorite: true // boolean
};


// vos films dasn movie1 et movie2
const movies = [movie1, movie2];
movies.map((movie) => generateMovieCard(movie));


function getTitle(movie) {
  console.log(movie.title);
}

function getFirstStar(movie) {
  console.log(movie.actors[0].firstname + " " + movie.actors[0].lastname);
}
