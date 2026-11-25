const movies = [
  {
    name: "Marty Supreme",
    releasedate: "December 25, 2025",
    cast: ["Timothée Chalamet", "Odessa A'zion", "Tyler the Creator"],
    imdbscore: 7.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc18TnfS900lexsA2YkFOQ82aDXOIUALBFBx0cR_e1DA&s=10",
  },
  {
    name: "Spider-Man: No Way Home",
    releasedate: "December 17, 2021",
    cast: ["Tom Holland", "Zendaya", "Jacob Batalon"],
    imdbscore: 8.1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlwlRcdHIDVihdm4cbh55FYdwmGjOZQOdeGVoR4GvSw&s=10",
  },
  {
    name: "Shutter Island",
    releasedate: "February 19, 2010",
    cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
    imdbscore: 8.2,
    img: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Breaking Bad",
    releasedate: "January 20, 2008",
    cast: ["Bryan Cranston", "Aaron Paul", "Giancarlo Esposito"],
    imdbscore: 9.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48DbZSXkajp98TFO6Tn_yGy1DAoqpHu1OgInOqzOA0A&s=10",
  },
  {
    name: "The Odyssey",
    releasedate: "July 17, 2026",
    cast: ["Anne Hathaway", "Tom Holland", "Robert Pattinson"],
    imdbscore: 8.4,
    img: "https://m.media-amazon.com/images/M/MV5BNTcyNmJlZmQtNDUwYy00NDBjLTg1NGQtYTY2Y2UxMWM3NmI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Fight Club",
    releasedate: "October 15, 1999",
    cast: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    imdbscore: 8.8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnNDrJNgxA5hZPfuhD6Shb7wmNdvJ_lJe90KTII7vbQ&s=10",
  },
  {
    name: "The Matrix",
    releasedate: "March 31, 1999",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    imdbscore: 8.7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUyob1nsYqWJ9N7nXkJoEqFAP7Z17qnBIM8nsOhh74g&s=10",
  },
  {
    name: "Sen to Chihiro no kamikakushi",
    releasedate: "July 20, 2001",
    cast: ["Miyu Irino", "Rumi Hiiragi", "Mari Natsuki"],
    imdbscore: 8.6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_ZMTP-AmWnarhhnLqfSARQzpCthiz-qhJly8ptUfwg&s=10",
  },
];

const container = document.getElementById("moviecontainer");

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  const card = document.createElement("div");
  const title = document.createElement("h2");
  const releaseDate = document.createElement("p");
  const cast = document.createElement("p");
  const score = document.createElement("h3");
  const image = document.createElement("img");

  card.classList.add("moviecard");

  title.textContent = movie.name;
  releaseDate.textContent = movie.releasedate;
  score.textContent = "⭐ " + movie.imdbscore;

  for (let j = 0; j < movie.cast.length; j++) {
    cast.textContent += movie.cast[j];

    if (j < movie.cast.length - 1) {
      cast.textContent += ", ";
    }
  }

  image.src = movie.img;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(releaseDate);
  card.appendChild(score);
  card.appendChild(cast);

  container.appendChild(card);
}
