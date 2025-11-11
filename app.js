function changeTheme() {
  let body = document.querySelector("body");

  // body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

const mainImage = document.querySelector(".salsa-intro-picture");
const gridImages = document.querySelectorAll(".grid img");

gridImages.forEach((img) => {
  img.addEventListener("click", () => {
    const temp = mainImage.src;
    mainImage.src = img.src;
    img.src = temp;
  });
});