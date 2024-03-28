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
// console.log(slides);
//console.log(slides.length);

const dots = document.querySelector(".dots");
let bannerImgClass = document.querySelector(".banner-img");
let imagesFullPath = document.querySelector(".banner-img").src;
let imagesFilename = imagesFullPath.replace(/^.*[\\\/]/, "");
let tagline = document.querySelector("#banner");
// console.log(dots);

//CREATION DES DOTS----------------------------------------------------------------------------------------

for (let i = 0; i < slides.length; i++) {
  // initialisation (à 0), condition (tout le tablau), expression finale (incrémentation) de la boucle
  // console.log(slides[i].image); // instruction executée si boucle vérifiée
  // console.log(slides[i].tagLine);
  let div = document.createElement("div"); //création de la div
  div.className = "dot"; //ajout d'une classe à la div
  // console.log(div.className);
  dots.appendChild(div); //permet d'injecter les div créées dans la balise dots présente initialement dans le html
  // console.log(div);

  if (imagesFilename == slides[i].image) {
    div.className = "dot dot_selected";
    // div.classList.add("active");
    // dots.classList.add("dot_selected");
  } // ajoute classe à image affichée
  else {
    // div.className = "dot";
    div.classList.remove("dot_selected");
  }
}

//CREATION DES ARROWS ----------------------------------------------------------------------------------------

const left = document.querySelector(".arrow_left"); //récupérer notre balise html qui correspond à la classe
const right = document.querySelector(".arrow_right");
let indexActuel = 0;

left.addEventListener("click", () => {
  // console.log("j'ai cliqué à gauche");
  //deux actions au click : soit retour à la dernière image du tableau si image id=0 et pour tout autre cas action id:-1
  indexActuel -= 1;
  if (indexActuel < 0) {
    //vérification du cas où l'on clique à gauche en étant déjà sur le 1er élément du tableau
    // attribuer à notre indice actuel la valeur de l'indice du dernier élément du tableau
    indexActuel = slides.length - 1;
  }
  // console.log(indexActuel);
  bannerImgClass.src = "./assets/images/slideshow/" + slides[indexActuel].image;
  // console.log(bannerImgClass);
});

right.addEventListener("click", () => {
  // console.log("j'ai cliqué à droite");
  indexActuel += 1;
  if (indexActuel > slides.length - 1) {
    //vérification du cas où l'on clique à gauche en étant déjà sur le 1er élément du tableau
    // attribuer à notre indice actuel la valeur de l'indice du dernier élément du tableau
    indexActuel = 0;
  }
  // console.log(indexActuel);
  bannerImgClass.src = "./assets/images/slideshow/" + slides[indexActuel].image;
  // console.log(bannerImgClass);
});

// for (let i = 0; i < slides.length; i++) {
//   // initialisation (à 0), condition (tout le tablau), expression finale (incrémentation) de la boucle
//   // console.log(slides[i].image); // instruction executée si boucle vérifiée
//   //console.log(slides[i].tagLine);
//   let divTag = document.createElement("div"); //création de la div
//   divTag.className = "tagline"; //ajout d'une classe à la div
//   //console.log(div);
//   tagline.appendChild(divTag); //permet d'injecter les div créées dans la balise dots présente initialement dans le html
// }
// AJOUT TEXTE DIFFERENT DANS CHAQUE IMAGE
// CREER UNE NOUVELLE CLASSE DANS LE <p> du texte
