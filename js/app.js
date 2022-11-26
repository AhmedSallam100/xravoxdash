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

// searchBtn.addEventListener("click", () => {
//   sidebar.classList.remove("close");
//   content.classList.toggle("ml-250")
// });
// searchBtn.addEventListener("click", () => {
//   myIcon.forEach((ele) => {
//     ele.classList.toggle("w-44")
//   })
// });

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
  document.body.classList.add(localStorage.getItem("dark"))
  themeButton.classList.add(iconTheme);
}else {
  document.body.classList.remove("dark-theme")
  themeButton.classList.remove(iconTheme);
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



if (localStorage.getItem("name")) {
  document.querySelector("body .sub-menu h2").innerHTML = localStorage.getItem("name")
  form.forEach((ele) => {
    ele.style.display = "none"
  })
  content.classList.remove("fb-58")
  sidebar.classList.remove("fb-58")
} else {
  content.classList.add("fb-58")
  sidebar.classList.add("fb-58")
}
logOut.addEventListener("click", function () {
  localStorage.removeItem("name")
  form.forEach((ele) => {
    ele.style.display = "block"
  })
  content.classList.add("fb-58")
  sidebar.classList.add("fb-58")
  document.querySelector("body.dark-theme .sub-menu h2").innerHTML = "User964"
})

let crAc = document.querySelectorAll(".crAc")
let sign = document.querySelector(".sign")
let log = document.querySelector(".log")

crAc.forEach((ele) => {
  ele.addEventListener("click", () => {
    sign.classList.toggle("op-0")
    log.classList.toggle("op-0")
  })
})

let singU = document.querySelector(".sign-u")
let singP = document.querySelector(".sign-p")
let singBtn = document.querySelector(".sign-b")

singBtn.addEventListener("click", () => {
  if (singU.value && singP.value) {
    localStorage.setItem("sign-U", singU.value)
    localStorage.setItem("sign-P", singP.value)
    sign.classList.toggle("op-0")
    log.classList.toggle("op-0")
  }
})
btn.onclick = function () {
  if (localStorage.getItem("sign-U") == username.value && localStorage.getItem("sign-P") == pass.value) {
    window.localStorage.setItem("name", username.value)
    document.querySelector("body.dark-theme .sub-menu h2").innerHTML = username.value
    form.forEach((ele) => {
      ele.remove()
    })
  }else if (localStorage.getItem("sign-U") !== username.value && localStorage.getItem("sign-P") !== pass.value) {
    btn.classList.toggle("anmit")

  }
  else if (localStorage.getItem("sign-U") !== username.value ) {
    btn.classList.toggle("anmit")
    // document.querySelector(".error-u").innerHTML = "Usarname Not Found"
    // document.querySelector(".error-p").innerHTML = ""
  }else if (localStorage.getItem("sign-P") !== pass.value) {
    btn.classList.toggle("anmit")
    // document.querySelector(".error-p").innerHTML = "Password Not Found"
    // document.querySelector(".error-u").innerHTML = ""
  }
}


// Show Password

let myButton = document.querySelectorAll("#myBtnss"),
    myInput = document.querySelectorAll("#my-passsss");

myButton.forEach((ele) => {
  ele.onclick = function() {
    if (this.classList == "uil uil-eye btn-shape") {
      myInput.forEach((ele) => {
        ele.setAttribute("type", "text");
      })
      this.classList = "uil uil-eye-slash btn-shape"
    } else {
      myInput.forEach((ele) => {
        ele.setAttribute("type", "password");
        this.classList = "uil uil-eye btn-shape";
      })
    }
  }
})


// Choose Img

if (localStorage.getItem("img")) {
  document.querySelector("#display-img").style.backgroundImage = localStorage.getItem("img");
}

logOut.addEventListener("click", function () {
  localStorage.setItem("img", `url(img/user.png)`)
})

const img_input = document.querySelector("#img-input")
var upload_img = "";

img_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    upload_img = reader.result;
    document.querySelector("#display-img").style.backgroundImage = `url(${upload_img})`;
    window.localStorage.setItem("img", `url(${upload_img})`)
  })
  reader.readAsDataURL(this.files[0]);
})
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content4 > div");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});


// function myBalot(str) {
//   let mySol =  (str.length / 2);
//   if (str % 2 == 0) {
//     return str.charAt(mySol)
//   } else {
//     return `${str.charAt(mySol - true)}${str.charAt(mySol)} `
//   }
// }
// console.log(myBalot('Ahmedd'))