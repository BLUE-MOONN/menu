// Search bar functionality
const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search menu...');
searchInput.classList.add('search-bar');
document.querySelector('.menu').prepend(searchInput);

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const items = document.querySelectorAll('li');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
});
