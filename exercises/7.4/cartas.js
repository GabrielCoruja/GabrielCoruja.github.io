const sectionLetters = document.getElementById("letters");
const letterVerse = document.getElementById("letter-verse");
const letters = [
  "cinco-de-ouros.png",
  "nove-de-espadas.png",
  "quatro-de-paus.png",
  "seis-de-copas.png",
  "sete-de-espadas.png",
  "sete-de-paus.png",
  "tres-de-ouros.png"
];
const clas = ["rotate", "skewing", "scale"];

letterVerse.addEventListener("click", () => {
  let newImg = document.createElement("img");
  let numberRandom = Math.floor(Math.random() * letters.length);
  let classRandom = Math.floor(Math.random() * clas.length);
  newImg.src = letters[numberRandom];
  newImg.className = clas[classRandom];
  sectionLetters.appendChild(newImg);
});
