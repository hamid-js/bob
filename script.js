
const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");
const lefteye = document.getElementById("lefteye");
const righteye = document.getElementById("righteye");

userInput.addEventListener("focus", () => {
  lefteye.style.top = "85px";
  lefteye.style.left = "105px";
  righteye.style.top = "85px";
  righteye.style.left = "167px";
});
userInput.addEventListener("blur", () => {
  lefteye.style.top = "75px";
  lefteye.style.left = "110px";
  righteye.style.top = "75px";
  righteye.style.left = "174px";
  lefteye.style.paddingLeft = "0px";
  righteye.style.paddingLeft = "0px";
});
passInput.addEventListener("focus", () => {
  lefteye.style.top = "60px";
  lefteye.style.left = "115px";
  righteye.style.top = "60px";
  righteye.style.left = "170px";
});
passInput.addEventListener("blur", () => {
  lefteye.style.top = "75px";
  lefteye.style.left = "110px";
  righteye.style.top = "75px";
  righteye.style.left = "174px";

  lefteye.style.paddingLeft = "0px";
  righteye.style.paddingLeft = "0px";
});


userInput.addEventListener("keydown", () => {
  let vlueLength = (userInput.value.length + 1) / 2;
  if (vlueLength < 20) {
    lefteye.style.paddingLeft = `${vlueLength}px`;
    righteye.style.paddingLeft = `${vlueLength}px`;
  }
});


