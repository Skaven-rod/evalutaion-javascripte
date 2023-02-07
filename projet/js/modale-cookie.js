function evenementBouton() {
  const maModale = document.getElementById("modale");
  maModale.style.display = "block";
}

function evenementFermer() {
  const maModale = document.getElementById("modale");
  maModale.style.display = "none";
}

const FermerM = document.getElementById("bouton-fermer");

FermerM.addEventListener("click", evenementFermer);

const monBouton = document.getElementById("bouton");

monBouton.addEventListener("click", evenementBouton);

function entrerJeu () {
  maModale.style.display = "none";
  
}
addEventListener("", popup)
function popup () {
  const maModale = document.getElementById("modale");
  maModale.style.display = "block";
}