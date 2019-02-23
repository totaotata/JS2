//-------Modif 1--------//
function changeTitles()
{
console.log(document.getElementsByClassName("jumbotron-heading")[0].innerHTML = "Ce que j'ai appris à THP");
console.log(document.getElementsByClassName("lead text-muted")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
}
changeTitles();

//-------Modif 2--------//
function changeCallToActions()
{
  console.log(document.getElementsByClassName("btn btn-primary my-2")[0].textContent = "OK je veux tester !");
  document.getElementsByClassName("btn btn-primary my-2")[0].setAttribute("href", "http://www.thehackingproject.org");
  console.log(document.getElementsByClassName("btn btn-secondary my-2")[0].textContent = "Non merci");
  document.getElementsByClassName("btn btn-secondary my-2")[0].setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}
changeCallToActions();

//-------Modif 3--------//
function changeLogoName()
{
console.log(document.getElementsByTagName("strong")[0].textContent = "The THP Experience");
console.log(document.getElementsByTagName("strong")[0].style.fontSize = "2em");
}

changeLogoName();

//-------Modif 4--------//
function populateImages()
{
let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
var i;
let img = document.getElementsByTagName("img");

for (i = 0; i < img.length; i++) {
  img[i].setAttribute("data-src", imagesArray[i]);
}
}
populateImages();

//-------Modif 5--------//
function deleteLastCards()
{
  card = document.getElementsByClassName("col-md-4");
  for (i = 2; i < card.length; i++) {
    card[i].nextElementSibling.remove();
  }
}
//deleteLastCards()

//-------Modif 6--------//
function changeCardsText()
{
let newCard = document.querySelectorAll("p.card-text");
  for (i = 0; i < 1;i++) {
    newCard[i].textContent = "Carte HTML : L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
    newCard[i+1].textContent = "Carte CSS : Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML";
    newCard[i+2].textContent = "Carte JS : JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype.";

  }
}
changeCardsText();


//-------Modif 7--------//

function changeViewButtons()
{
let button = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
for (i = 0; i < button.length;i++) {
button[i].setAttribute("class", "btn btn-sm btn-success");
}

}
changeViewButtons();
deleteLastCards()
