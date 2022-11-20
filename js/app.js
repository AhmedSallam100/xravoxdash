// Open Close Sidebar
let body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
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
