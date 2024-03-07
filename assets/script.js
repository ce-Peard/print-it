const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

var left = document.querySelector (".arrow_left"); //récupérer notre balise html qui correspond à la classe
var right = document.querySelector (".arrow_right");


left.addEventListener ("click",slideleft); // surveille le doc à la recherche de l'action click sur notre balise et si l'action se produit, exécuter la fonction slideleft ()
function slideleft () {
	console.log ("j'ai cliqué à gauche"); // teste action, résultat dans console Google
}

right.addEventListener ("click", slideright);
function slideright () {
	console.log ("j'ai cliqué à droite");
}