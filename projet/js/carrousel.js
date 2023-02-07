const images = ["nappe.jpg", "miette.jpg", "assiette.jpg"]

let indexImageActuelle = 0;

const flechdroite = document.getElementById("fleche-droite")
const flechegauche = document.getElementById("fleche-gauche")
const image = document.getElementById("image")
flechdroite.addEventListener("click", evenementFlecheDroite)
flechegauche.addEventListener("click", evenementFlecheGauche)
localStorage.setItem("image", 0)
evenementFlecheDroite()


function evenementFlecheDroite() {



    indexImageActuelle++

    if (indexImageActuelle > 2) {
        indexImageActuelle = 0

    }

    localStorage.setItem("image", images[indexImageActuelle])

    image.src = "../image/" + images[indexImageActuelle]
}

function evenementFlecheGauche() {

    indexImageActuelle--

    if (indexImageActuelle < 0) {
        indexImageActuelle = 2


    }
    image.src = "../image/" + images[indexImageActuelle]

    localStorage.setItem("image", images[indexImageActuelle])
}