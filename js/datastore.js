window.onload = function() {
    var movieItems = document.getElementsByClassName('item');
    
    for(var i = 0; i < movieItems.length; i++) {
        movieItems[i].addEventListener('click', function(event) {
            event.preventDefault();
            
            var title = this.getAttribute('data-title');
            var genre = this.getAttribute('data-genre');
            var duration = this.getAttribute('data-duration');
            var year = this.getAttribute('data-year');
            var description = this.getElementsByClassName('description')[0].getElementsByTagName('p')[0].textContent;
            var image = this.getElementsByTagName('img')[0].getAttribute('src');
            var filmLink = this.getAttribute('trailer');
            
            localStorage.setItem('movieTitle', title);
            localStorage.setItem('movieGenre', genre);
            localStorage.setItem('movieDuration', duration);
            localStorage.setItem('movieYear', year);
            localStorage.setItem('movieDescription', description);
            localStorage.setItem('movieImage', image);
            localStorage.setItem('movieLink', filmLink);
            
            window.location.href = 'video.html';
       });
    }
};
 