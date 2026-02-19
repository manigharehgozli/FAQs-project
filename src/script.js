const titles = document.querySelectorAll(".section-title");
const descriptions = document.querySelectorAll(".section-description");
const icons = document.querySelectorAll(".button-icon");

function changeImageBasedOnScreen() {
  const imageElement = document.querySelector(`.background-image`);
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    imageElement.src = `/images/background-pattern-mobile.svg`;
    imageElement.alt = "mobile img";
  } else {
    imageElement.src = `/images/background-pattern-desktop.svg`;
    imageElement.alt = "desktop img";
  }
}

window.addEventListener(`load`, changeImageBasedOnScreen);
window.addEventListener(`resize`, changeImageBasedOnScreen);

titles.forEach((title, i) => {
  title.addEventListener("click", () => toggleItem(i));
});

icons.forEach((icon, i) => {
  icon.addEventListener("click", () => toggleItem(i));
});

function toggleItem(index) {
  descriptions.forEach((desc, i) => {
    if (i === index) {
      const isHidden = desc.classList.contains("hidden");

      desc.classList.toggle("hidden", !isHidden);

      icons[i].src = isHidden
        ? "/images/icon-minus.svg"
        : "/images/icon-plus.svg";
    } else {
      desc.classList.add("hidden");
      icons[i].src = "/images/icon-plus.svg";
    }
  });
}