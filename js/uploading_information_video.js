window.onload = function() {
    var title = localStorage.getItem('movieTitle');
    var genre = localStorage.getItem('movieGenre');
    var duration = localStorage.getItem('movieDuration');
    var year = localStorage.getItem('movieYear');
    var description = localStorage.getItem('movieDescription');
    var image = localStorage.getItem('movieImage');
    var filmLink = localStorage.getItem('movieLink');
    
    document.getElementById('movie-title').textContent = title;
    document.getElementById('movie-genre').textContent = 'Жанр: ' + genre;
    document.getElementById('movie-duration').textContent = 'Длительность: ' + duration;
    document.getElementById('movie-year').textContent = 'Год производства: ' + year;
    document.getElementById('movie-description').textContent = description;
    document.getElementById('movie-image').src = image;
    document.getElementById('movie-trailer').src = filmLink;
    
    localStorage.removeItem('movieTitle');
    localStorage.removeItem('movieGenre');
    localStorage.removeItem('movieDuration');
    localStorage.removeItem('movieYear');
    localStorage.removeItem('movieDescription');
    localStorage.removeItem('movieImage');
    localStorage.removeItem('movieLink');
 }