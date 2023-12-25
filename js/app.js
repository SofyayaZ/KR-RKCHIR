const genreFilter = document.getElementById('genre-filter');
const moviesContainer = document.querySelector('.flex-container');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const items = document.querySelectorAll('.item');

// Фильтр
genreFilter.addEventListener('change', function() {
    const selectedGenre = this.value;
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterMovies(selectedGenre, searchTerm);
});

function filterMovies(genre, search) {
    const movies = moviesContainer.getElementsByClassName('item');
    for (let movie of movies) {
        const movieGenres = movie.getAttribute('data-genre').split(', ');
        const title = movie.querySelector('h2').textContent.toLowerCase();

        if ((genre === 'all' || movieGenres.includes(genre)) && (search === '' || title.includes(search))) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    }
}

// Поисковик
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedGenre = genreFilter.value;
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterMovies(selectedGenre, searchTerm);
});
