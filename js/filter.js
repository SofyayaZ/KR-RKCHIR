const genreFilter = document.getElementById('genre-filter');
const moviesContainer = document.querySelector('.flex-container');


genreFilter.addEventListener('change', function() {
    const selectedGenre = this.value;
    filterMovies(selectedGenre);
});

function filterMovies(genre) {
    const movies = moviesContainer.getElementsByClassName('item');
    for (let movie of movies) {
        const movieGenres = movie.getAttribute('data-genre').split(', ');
        if (genre === 'all' || movieGenres.includes(genre)) {
            movie.style.display = 'block';
        }
        else {
            movie.style.display = 'none';
        }
    }
}