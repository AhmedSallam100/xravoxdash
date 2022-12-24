const btn55 = document.querySelector("#btn55");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

btn55.addEventListener("click", sendEmail)
function sendEmail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    phone_id: document.getElementById("phone_id").value,
    message: document.getElementById("message").value,
  };

  emailjs
  .send("service_kzlzlxh", "template_gwmscep", params)
  .then(function () {
  });
}
closeBtn.onclick = () => {
  modal.classList.remove("active-5");
};
document.querySelector(".my-a").onclick = function () {
  modal.classList.remove("active-5");
}

btn55.addEventListener("click", () => {
  let paramss = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  if (paramss.from_name && paramss.email_id && paramss.message) {
    modal.classList.add("active-5")
  }
})