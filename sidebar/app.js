const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");
const mySidebar = document.getElementById("mySidebar");
const main = document.getElementById("main");

openBtn.addEventListener("click", () => {
  mySidebar.style.width = "250px";
  main.style.width = "300px";
  main.style.marginLeft = "250px";
});

closeBtn.addEventListener("click", () => {
  mySidebar.style.width = "0";
  main.style.width = "5";
  main.style.marginLeft = "0px";
});
