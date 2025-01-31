document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupImg = document.getElementById("popup-img");
  const popupDesc = document.getElementById("popup-desc");
  const closeBtn = document.querySelector(".close");

  // Gestion du popup
  document.querySelectorAll(".popup-trigger").forEach(item => {
      item.addEventListener("click", function (e) {
          e.preventDefault();
          popupTitle.innerText = this.dataset.name;
          popupImg.src = this.dataset.img;
          popupDesc.innerText = this.dataset.desc;
          popup.style.display = "flex";
      });
  });

  closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
  });

  window.addEventListener("click", function (e) {
      if (e.target === popup) {
          popup.style.display = "none";
      }
  });

  // Gestion de la barre de recherche
  const searchInput = document.querySelector(".search-bar");
  searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const items = document.querySelectorAll("li");

      items.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
              item.style.display = "flex";
          } else {
              item.style.display = "none";
          }
      });
  });
});
