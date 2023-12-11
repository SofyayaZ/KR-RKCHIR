const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const items = document.querySelectorAll('.item');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim().toLowerCase();

    items.forEach(function(item) {
        const title = item.querySelector('h2').textContent.toLowerCase();

        if (title.includes(searchTerm)) {
            item.style.display = 'block';
        } 
        else {
            item.style.display = 'none';
        }
    });
});