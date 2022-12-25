const numberOfFolms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personaMoviesDB = {
    count: numberOfFolms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из помследних просмотренних фильмов", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из помследних просмотренних фильмов", ""),
      d = prompt("На сколько оцените его?", "");

personaMoviesDB.movies[a] = b;
personaMoviesDB.movies[c] = d;

console.log(personaMoviesDB);