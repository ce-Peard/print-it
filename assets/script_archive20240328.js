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

//CREATION DES DOTS----------------------------------------------------------------------------------------

for (let i = 0; i < slides.length; i++) {
  let div = document.createElement("div");
  div.className = "dot";
  dots.appendChild(div);

  if (imagesFilename == slides[i].image) {
    div.className = "dot dot_selected";
  } else {
    // div.className = "dot";
    div.classList.remove("dot_selected");
  }
}

//CREATION DES ARROWS ----------------------------------------------------------------------------------------

const left = document.querySelector(".arrow_left"); //récupérer notre balise html qui correspond à la classe
const right = document.querySelector(".arrow_right");
let indexActuel = 0;

let bannerTagLine = document.querySelector(".bannerTag");
let slidesIndex = slides[indexActuel].tagLine;
let htmlText = ` ${slidesIndex} `;
console.log(htmlText);

left.addEventListener("click", () => {
  indexActuel -= 1;
  if (indexActuel < 0) {
    indexActuel = slides.length - 1;
  }
  bannerTagLine.innerHTML = htmlText;
  bannerImgClass.src = "./assets/images/slideshow/" + slides[indexActuel].image;
  // bannerTagLine = slides[indexActuel].tagLine;
});
console.log(bannerTagLine.innerHTML);

// left.addEventListener("click", () => {
//   indexActuel -= 1;
//   if (indexActuel < 0) {
//     indexActuel = slides.length - 1;
//   }
//   bannerTagLine = `
//   <p>
//   ${slides[indexActuel].tagLine}
//   </p>
//   `;
// });

// let bannerTagLine = document.querySelector(".bannerTag").innerText;
// let slidesIndex = slides[indexActuel].tagLine;
// let htmlText = ` <p>${slidesIndex}</p> `;

// left.addEventListener("click", () => {
//   indexActuel -= 1;
//   if (indexActuel < 0) {
//     indexActuel = slides.length - 1;
//   }
//   bannerTagLine = htmlText;
// });
// console.log(bannerTagLine);

right.addEventListener("click", () => {
  indexActuel += 1;
  if (indexActuel > slides.length - 1) {
    indexActuel = 0;
  }
  bannerImgClass.src = "./assets/images/slideshow/" + slides[indexActuel].image;
});

// baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt");
