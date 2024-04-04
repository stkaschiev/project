let numberOfFilms = Number(prompt("How many movies have you watched?", ""));

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of your last seen movies?", "");
      b = prompt("What would you rate it?", "");
      c = prompt("One of your last seen movies?", "");
      d = prompt("What would you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);
