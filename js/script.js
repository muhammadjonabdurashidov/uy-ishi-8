let btnMonn = document.querySelector(".btn__moon");
let btnSun = document.querySelector(".btn__sun");
let boxContainer = document.querySelector(".container");
let body = document.querySelector(".body1");

btnMonn.addEventListener("click", () => {

body.classList.add("bodystyle");
btnMonn.style.display = "none";
btnSun.style.display = "flex";
btnSun.style.marginLeft = "28px"
boxContainer.style.borderColor = "black";

});

btnSun.addEventListener("click", () => {

btnSun.style.display = "none";
btnMonn.style.display = "flex";
body.classList.remove("bodystyle");
boxContainer.style.borderColor = "white";

})

