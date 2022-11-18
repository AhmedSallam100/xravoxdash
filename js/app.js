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

