// Open Close Sidebar
let body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  myIcon = document.querySelectorAll(".icon"),
  content = document.querySelector(".content"),
  closeIcon = document.querySelector(".close-side"),
  openIcon = document.querySelector(".open-side")

// toggle.addEventListener("click", () => {
//   sidebar.classList.toggle("close");
// });

// toggle.addEventListener("click", () => {
//   myIcon.forEach((ele) => {
//     ele.classList.toggle("w-44")
//   })
// });
closeIcon.addEventListener("click", () => {
  sidebar.classList.add("closes")
  content.classList.remove("ml-250")
  closeIcon.style.display = "none"
  openIcon.style.display = "flex"
})
openIcon.addEventListener("click", () => {
  sidebar.classList.remove("closes")
  content.classList.add("ml-250")
  openIcon.style.display = "none"
  closeIcon.style.display = "flex"
})

// Drop Menu 

function scrollTop() {
  const scrollTop = document.getElementById("scroll-up");
  if (this.scrollY >= 650) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

// Dark & Light Mode

const themeButton = document.getElementById("theme-button");
let webImg = document.querySelector(".logo-web")

const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

if (localStorage.getItem("dark")) {
  document.body.classList.add(localStorage.getItem("dark"))
  themeButton.classList.add(iconTheme);
  webImg.classList.remove("logo-web-light")
}else {
  document.body.classList.remove("dark-theme")
  themeButton.classList.remove(iconTheme);
  webImg.classList.add("logo-web-light")
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  webImg.classList.toggle("logo-web-light")

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark", darkTheme)
  }else {
    localStorage.removeItem("dark")
  }
})

// Random Color

let circle = document.querySelectorAll(".circle");
let myWb = document.querySelector(".m-wb");
let search2 = document.querySelector(".head .search input")

setInterval(() => {
  let color = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let a = "#";
  for (let i = 0; i < 6; i++) {
    a += color[Math.floor(Math.random() * color.length)];
  }
  circle.forEach((ele) => {
    ele.style.color = a
  })
  myWb.style.borderTopColor = a
  myWb.style.borderBottomColor = a
  // search2.style.borderColor = a
}, 1000)

// Sign in

// let input = document.querySelectorAll(".in-text")
// let btn = document.querySelector(".bttn")
// let form = document.querySelectorAll(".form")
// let logOut = document.querySelector(".m-js")
// let pass = document.querySelector(".pass")
// let username = document.getElementById("username")



// if (localStorage.getItem("name")) {
//   document.querySelector("body .sub-menu h2").innerHTML = localStorage.getItem("name")
//   form.forEach((ele) => {
//     ele.style.display = "none"
//   })
//   content.classList.remove("fb-58")
//   sidebar.classList.remove("fb-58")
// } else {
//   content.classList.add("fb-58")
//   sidebar.classList.add("fb-58")
// }
// logOut.addEventListener("click", function () {
//   localStorage.removeItem("name")
//   form.forEach((ele) => {
//     ele.style.display = "block"
//   })
//   content.classList.add("fb-58")
//   sidebar.classList.add("fb-58")
//   document.querySelector("body.dark-theme .sub-menu h2").innerHTML = "User964"
// })

// let crAc = document.querySelectorAll(".crAc")
// let sign = document.querySelector(".sign")
// let log = document.querySelector(".log")

// crAc.forEach((ele) => {
//   ele.addEventListener("click", () => {
//     sign.classList.toggle("op-0")
//     log.classList.toggle("op-0")
//   })
// })

// let singU = document.querySelector(".sign-u")
// let singP = document.querySelector(".sign-p")
// let singBtn = document.querySelector(".sign-b")

// singBtn.addEventListener("click", () => {
//   if (singU.value && singP.value) {
//     localStorage.setItem("sign-U", singU.value)
//     localStorage.setItem("sign-P", singP.value)
//     sign.classList.toggle("op-0")
//     log.classList.toggle("op-0")
//   }
// })
// btn.onclick = function () {
//   if (localStorage.getItem("sign-U") == username.value && localStorage.getItem("sign-P") == pass.value) {
//     window.localStorage.setItem("name", username.value)
//     document.querySelector("body.dark-theme .sub-menu h2").innerHTML = username.value
//     form.forEach((ele) => {
//       ele.remove()
//     })
//   }else if (localStorage.getItem("sign-U") !== username.value && localStorage.getItem("sign-P") !== pass.value) {
//     btn.classList.toggle("anmit")

//   }
//   else if (localStorage.getItem("sign-U") !== username.value ) {
//     btn.classList.toggle("anmit")
//   }else if (localStorage.getItem("sign-P") !== pass.value) {
//     btn.classList.toggle("anmit")
//   }
// }


// Show Password

// let myButton = document.querySelectorAll("#myBtnss"),
//     myInput = document.querySelectorAll("#my-passsss");

// myButton.forEach((ele) => {
//   ele.onclick = function() {
//     if (this.classList == "uil uil-eye btn-shape") {
//       myInput.forEach((ele) => {
//         ele.setAttribute("type", "text");
//       })
//       this.classList = "uil uil-eye-slash btn-shape"
//     } else {
//       myInput.forEach((ele) => {
//         ele.setAttribute("type", "password");
//         this.classList = "uil uil-eye btn-shape";
//       })
//     }
//   }
// })


// Choose Img

// if (localStorage.getItem("img")) {
//   document.querySelector("#display-img").style.backgroundImage = localStorage.getItem("img");
// }

// logOut.addEventListener("click", function () {
//   localStorage.setItem("img", `url(img/user.png)`)
// })

// const img_input = document.querySelector("#img-input")
// var upload_img = "";

// img_input.addEventListener("change", function() {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     upload_img = reader.result;
//     document.querySelector("#display-img").style.backgroundImage = `url(${upload_img})`;
//     window.localStorage.setItem("img", `url(${upload_img})`)
//   })
//   reader.readAsDataURL(this.files[0]);
// })
// let tabs = document.querySelectorAll(".tabs li");
// let tabsArray = Array.from(tabs);
// let divs = document.querySelectorAll(".content4 > div");
// let divsArray = Array.from(divs);

// tabsArray.forEach((ele) => {
//   ele.addEventListener("click", function (e) {
//     tabsArray.forEach((ele) => {
//       ele.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     divsArray.forEach((div) => {
//       div.style.display = "none";
//     });
//     // console.log(e.currentTarget.dataset.cont);
//     document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
//   });
// });

// Show Loader

let myPage = document.querySelector(".page"),
    myLoad = document.querySelector(".loader-1")

setTimeout(() => {
  myPage.classList.remove("fb-11")
  myLoad.style.opacity = "0"
  myLoad.style.display = "none"
}, 2500)