// Open Close Sidebar
let body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  myIcon = document.querySelectorAll(".icon")

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

toggle.addEventListener("click", () => {
  myIcon.forEach((ele) => {
    ele.classList.toggle("w-44")
  })
});

// Drop Menu 

let subMenu = document.querySelector("#subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu")
}


function scrollTop() {
  const scrollTop = document.getElementById("scroll-up");
  if (this.scrollY >= 650) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

// Dark & Light Mode

const themeButton = document.getElementById("theme-button");

const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// const getCurrentTheme = () =>
//   document.body.classList.contains("darkTheme") ? "dark" : "light";
// const getCurrentIcon = () =>
//   themeButton.classList.contains("iconTheme") ? "uil-moon" : "uil-sun";


// if (selectedTheme) {
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }
if (localStorage.getItem("dark")) {
  document.body.classList.add(darkTheme)
  themeButton.classList.add(iconTheme);
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // localStorage.setItem("selected-theme", getCurrentTheme());
  // localStorage.setItem("selected-icon", getCurrentIcon());
  if (document.body.classList == "dark-theme") {
    localStorage.setItem("dark", darkTheme)
  }else {
    localStorage.removeItem("dark")
  }
})