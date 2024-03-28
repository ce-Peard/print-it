//TABLEAU CONTENANT LES IMAGES DU SLIDER------------------------------------------------------------------

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const dots = document.querySelector(".dots");
let bannerImgClass = document.querySelector(".banner-img");
let imagesFullPath = document.querySelector(".banner-img").src;
let imagesFilename = imagesFullPath.replace(/^.*[\\\/]/, "");
let bannerTagLine = document.querySelector(".bannerTag");

//CREATION DES DOTS----------------------------------------------------------------------------------------

for (let i = 0; i < slides.length; i++) {
  let division = document.createElement("div");
  division.className = "dot";
  console.log(dots);

  dots.appendChild(division);

  if (imagesFilename == slides[i].image) {
    division.className = "dot dot_selected";
    // div.classList.add("active");
    // dots.classList.add("dot_selected");
  } // ajoute classe à image affichée
}

//CREATION DES ARROWS ----------------------------------------------------------------------------------------

const left = document.querySelector(".arrow_left"); //récupérer notre balise html qui correspond à la classe
const right = document.querySelector(".arrow_right");
let indexActuel = 0;

left.addEventListener("click", () => {
  indexActuel -= 1;
  if (indexActuel < 0) {
    indexActuel = slides.length - 1;
  }
  // removeSelectedDotClass(indexActuel);
  bannerImgClass.src = "./assets/images/slideshow/" + slides[indexActuel].image;
  bannerTagLine.innerHTML = ` ${slides[indexActuel].tagLine} `;
  const dotActuallySelected = document.querySelector(".dot_selected");
  dotActuallySelected.classList.remove("dot_selected");
  dots.children[indexActuel].classList.add("dot_selected");
});

right.addEventListener("click", () => {
  indexActuel += 1;
  if (indexActuel > slides.length - 1) {
    indexActuel = 0;
  }
  bannerImgClass.src = "./assets/images/slideshow/" + slides[indexActuel].image;
  bannerTagLine.innerHTML = ` ${slides[indexActuel].tagLine} `;
  const dotActuallySelected = document.querySelector(".dot_selected");
  dotActuallySelected.classList.remove("dot_selected");
  dots.children[indexActuel].classList.add("dot_selected");
});
