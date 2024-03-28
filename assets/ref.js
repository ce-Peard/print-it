const leftArrow = document.getElementById("leftArrow"); // Bouton flèche gauche
const rightArrow = document.getElementById("rightArrow"); // Bouton flèche droite
const bannerContent = document.getElementById("banner"); // Conteneur principal du carrousel
const dots = document.querySelector(".dots"); // Conteneur des points de navigation
let currentSlideIndex = 0; // Index de la diapositive actuellement affichée
// Tableau contenant les informations de chaque diapositive
const slides = [
  // Chaque objet représente une diapositive avec une image et un texte
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
// Création des diapositives et ajout au carrousel
slides.forEach((slide, index) => {
  // Création d'un nouvel élément div pour chaque diapositive
  const slideElement = document.createElement("div");
  slideElement.classList.add("slide"); // Ajout de la classe "slide" pour le style
  // Ajout de l'image et du texte à l'élément div
  slideElement.innerHTML = `
    <img src="/assets/images/slideshow/${slide.image}" alt="Slide ${
    index + 1
  }: ${slide.tagLine}">
    <p>${slide.tagLine}</p>
    `;
  bannerContent.appendChild(slideElement); // Ajout de la diapositive au conteneur principal
  // Création d'un point de navigation pour chaque diapositive
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dots.appendChild(dot);
  // Si c'est la première diapositive, ajoutez les classes "active" et "dot_selected"
  if (index === 0) {
    slideElement.classList.add("active");
    dot.classList.add("dot_selected");
  }
  // Ajout d'un écouteur d'événements pour changer de diapositive lors du clic sur un point
  dot.addEventListener("click", function () {
    // Suppression de la classe "dot_selected" de tous les points
    [...dots.children].forEach((dot) => dot.classList.remove("dot_selected"));
    // Ajout de la classe "dot_selected" au point cliqué
    dot.classList.add("dot_selected");
    // Affichage de la diapositive correspondante
    showSlide(index);
    currentSlideIndex = index;
  });
});
// Fonction pour afficher une diapositive spécifique
function showSlide(slideIndex) {
  // Déplacement de chaque diapositive pour afficher celle souhaitée
  [...bannerContent.children].forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - slideIndex) * 100}%)`;
  });
}
// Fonctions pour ajouter/supprimer la classe "dot_selected" des points de navigation
function removeSelectedDotClass(index) {
  [...dots.children][index].classList.remove("dot_selected");
}
function addSelectedDotClass(index) {
  [...dots.children][index].classList.add("dot_selected");
}
// Affichage de la première diapositive au chargement
showSlide(currentSlideIndex);
// Écouteurs d'événements pour les boutons flèches
rightArrow.addEventListener("click", function () {
  removeSelectedDotClass(currentSlideIndex);
  currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Passage à la diapositive suivante
  showSlide(currentSlideIndex);
  addSelectedDotClass(currentSlideIndex);
});
leftArrow.addEventListener("click", () => {
  removeSelectedDotClass(currentSlideIndex);
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Retour à la diapositive précédente
  showSlide(currentSlideIndex);
  addSelectedDotClass(currentSlideIndex);
});
modifié;
