import data from "./data.js";
import "./style.css";

// Generate Student Name
const button = document.querySelector("#button");
const studentName = document.querySelector("#studentName");

const generateStudentName = () => {
  studentName.textContent = data[getRandomInt(0, data.length - 1)].name;
};

button.addEventListener("click", generateStudentName);

// Dark/Light Mode

const darkModeRadio = document.getElementById("dark");
const lightModeRadio = document.getElementById("light");

darkModeRadio.addEventListener("change", () => {
  console.log("Dark mode");
  document.body.classList.remove("bg-gray-100");
  document.body.classList.add("bg-gray-700", "text-white");
});

lightModeRadio.addEventListener("change", () => {
  console.log("Light mode");
  document.body.classList.remove("bg-gray-700", "text-white");
  document.body.classList.add("bg-gray-100");
});

// from MDN
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
