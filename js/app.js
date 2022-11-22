// Open Close Sidebar
let body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  myIcon = document.querySelectorAll(".icon"),
  content = document.querySelector(".content")

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
  content.classList.toggle("ml-250")
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

// Sign in

let input = document.querySelectorAll(".in-text")
let btn = document.querySelector(".bttn")
let form = document.querySelectorAll(".form")
let logOut = document.querySelector(".m-js")
let pass = document.querySelector(".pass")
let username = document.getElementById("username")


setInterval(() => {
  if (localStorage.getItem("name")) {
    document.querySelector("body.dark-theme .sub-menu h2").innerHTML = localStorage.getItem("name")
    form.forEach((ele) => {
      ele.style.display = "none"
    })
    content.classList.remove("fb-58")
    sidebar.classList.remove("fb-58")
  } else {
    content.classList.add("fb-58")
    sidebar.classList.add("fb-58")
  }
  logOut.onclick = function () {
    localStorage.removeItem("name")
    form.forEach((ele) => {
      ele.style.display = "block"
    })
    document.querySelector("body.dark-theme .sub-menu h2").innerHTML = "User964"
  }
}, 0)

btn.onclick = function (e) {
  e.preventDefault()
  if (username.value && pass.value) {
    window.localStorage.setItem("name", username.value)
    document.querySelector("body.dark-theme .sub-menu h2").innerHTML = username.value
    form.forEach((ele) => {
      ele.remove()
    })
  }
}

// Show Password

let myButton = document.getElementById("myBtnss"),
    myInput = document.getElementById("my-passsss");

myButton.onclick = function() {
  'use strict';
  if (this.textContent === "Show Password") {
    myInput.setAttribute("type", "text");
    this.textContent = "Hide Password"
  } else {
    myInput.setAttribute("type", "password");
    this.textContent = "Show Password"
  }
}