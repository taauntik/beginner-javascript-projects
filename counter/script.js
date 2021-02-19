const countNumber = document.querySelector(".count-number");
const btn = document.querySelector(".btn");

let count = 0;

const checkNumber = () => {
  if (countNumber.innerText < 0) {
    countNumber.style.color = "red";
  }
  if (countNumber.innerText > 0) {
    countNumber.style.color = "green";
  }
  if (countNumber.innerText == 0) {
    countNumber.style.color = "black";
  }
};

const btnEventListenter = (obj) => {
  if (obj.innerText === "Increment") {
    count++;
  }
  if (obj.innerText === "Decrement") {
    count--;
  }
  if (obj.innerText === "Reset") {
    count = 0;
  }
  countNumber.innerText = count;
  checkNumber();
};
