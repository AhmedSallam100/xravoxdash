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
searchBtn.addEventListener("click", () => {
  myIcon.forEach((ele) => {
    ele.classList.toggle("w-44")
  })
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


if (localStorage.getItem("dark")) {
  document.body.classList.add(darkTheme)
  themeButton.classList.add(iconTheme);
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark", darkTheme)
  }else {
    localStorage.removeItem("dark")
  }
})

// Random Color

let circle = document.querySelectorAll(".circle");

setInterval(() => {
  let color = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let a = "#";
  for (let i = 0; i < 6; i++) {
    a += color[Math.floor(Math.random() * color.length)];
  }
  circle.forEach((ele) => {
    ele.style.color = a
  })
}, 1000)