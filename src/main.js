import data from "./data.js";
import "./style.css";

const button = document.querySelector("#button");
const studentName = document.querySelector("#studentName");

const generateStudentName = () => {
  studentName.textContent = data[getRandomInt(0, data.length - 1)].name;
};

button.addEventListener("click", generateStudentName);

// from MDN
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
