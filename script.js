// Search Functionality
const searchInput = document.querySelector('.search-bar');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const items = document.querySelectorAll('.category li');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'flex'; // Show the item
    } else {
      item.style.display = 'none'; // Hide the item
    }
  });
});