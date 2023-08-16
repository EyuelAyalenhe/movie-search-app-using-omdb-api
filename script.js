// Get the buttons
const moviesButton = document.getElementById("Movies");
const seriesButton = document.getElementById("series");
const boxOfficeButton = document.getElementById("box-office");
const comingSoonButton = document.getElementById("coming-soon");

// Add event listeners to the buttons
moviesButton.addEventListener("click", () => {
  fetchMovies();
});

seriesButton.addEventListener("click", () => {
  fetchSeries();
});

boxOfficeButton.addEventListener("click", () => {
  fetchBoxOffice();
});

comingSoonButton.addEventListener("click", () => {
  fetchComingSoon();
});

// Function to fetch and display movies
function fetchMovies() {
  fetch(" ")
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.Search);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function to fetch and display series
function fetchSeries() {
  fetch("")
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.Search);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function to fetch and display box office top 10
function fetchBoxOffice() {
  fetch(" ")
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.Search);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function to fetch and display coming soon movies
function fetchComingSoon() {
  fetch(" ")
    .then((response) => response.json())
    .then((data) => {
      displayMovies(data.Search);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function to display movies
function displayMovies(movies) {
  const movieRow = document.getElementById("movie-row");
  movieRow.innerHTML = ""; // Clear previous results

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieImage = document.createElement("img");
    movieImage.classList.add("movie-image");
    movieImage.src = movie.Poster;

    const movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie-title");
    movieTitle.textContent = movie.Title;

    const movieDescription = document.createElement("p");
    movieDescription.classList.add("movie-description");
    movieDescription.textContent = movie.Year;

    
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieDescription);

    movieRow.appendChild(movieCard);
  });
}