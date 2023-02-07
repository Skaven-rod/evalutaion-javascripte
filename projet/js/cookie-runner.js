const canvas = document.getElementById("canvas-cookie");
const ctx = canvas.getContext("2d");

console.log(localStorage.getItem("image"))

setInterval(rafraichir, 17);
let perdu = false
let score = 0
let ratiotaille = 1
const cookie = {
    positionHorizontal: 700,
    positionVertical: 375,
    vitesseHorizontal: 0,
    vitesseVertical: 0,
}
const boucheV1 = {
    positionHorizontal: 400,
    positionVertical: -200,
    vitesseVertical: 10
}
const boucheV2 = {
    positionHorizontal: 700,
    positionVertical: -100,
    vitesseVertical: 12
}
const boucheV3 = {
    positionHorizontal: 1200,
    positionVertical: -150,
    vitesseVertical: 14
}
const boucheV4 = {
    positionHorizontal: 200,
    positionVertical: 1140,
    vitesseVertical: -11
}

const boucheH1 = {
    positionHorizontal: -150,
    positionVertical: 200,
    vitesseHorizontal: 17,
}
const boucheH2 = {
    positionHorizontal: -100,
    positionVertical: 400,
    vitesseHorizontal: 16,
}
const boucheH3 = {
    positionHorizontal: 1600,
    positionVertical: 400,
    vitesseHorizontal: -16,
}
addEventListener("keydown", evenemenClavierDown);
addEventListener("keyup", evenemenClavierUp);


let toucheQappuye = false;
let toucheZappuye = false;
let toucheDappuye = false;
let toucheSappuye = false;

function evenemenClavierDown(e) {

    if (e.key == "q") {
        toucheQappuye = true;
    } else if (e.key == "d") {
        toucheDappuye = true;
    } else if (e.key == "z") {
        toucheZappuye = true;
    } else if (e.key == "s") {
        toucheSappuye = true;
    }
}

function evenemenClavierUp(e) {

    if (e.key == "q") {
        toucheQappuye = false;
    } else if (e.key == "d") {
        toucheDappuye = false;
    } else if (e.key == "z") {
        toucheZappuye = false;
    } else if (e.key == "s") {
        toucheSappuye = false;

    }
}

function createBoucheV1(ratio = 1) {
    // boucheV1
    ctx.fillStyle = "rgb( 30, 30, 50 )"
    ctx.fillRect(boucheV1.positionHorizontal, boucheV1.positionVertical, 80 * ratio, 60 * ratio)
    ctx.fillStyle = "rgb( 255, 00, 00 )"
    ctx.fillRect(boucheV1.positionHorizontal, boucheV1.positionVertical, 10 * ratio, 60 * ratio)
    ctx.fillStyle = "rgb( 255, 0, 0 )"
    ctx.fillRect(boucheV1.positionHorizontal + 70 * ratio, boucheV1.positionVertical, 10 * ratio, 60 * ratio)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheV1.positionHorizontal, boucheV1.positionVertical, 80 * ratio, 15 * ratio)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheV1.positionHorizontal, boucheV1.positionVertical + 45 * ratio, 80 * ratio, 15 * ratio)
    ctx.fillStyle = "rgb( 255, 255, 255 )"
    ctx.fillRect(boucheV1.positionHorizontal + 10 * ratio, boucheV1.positionVertical + 15 * ratio, 60 * ratio, 30 * ratio)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV1.positionHorizontal + 10 * ratio, boucheV1.positionVertical + 26 * ratio, 60 * ratio, 10 * ratio)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV1.positionHorizontal, boucheV1.positionVertical + 30 * ratio, 80 * ratio, 2 * ratio)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV1.positionHorizontal + 10 * ratio, boucheV1.positionVertical + 15 * ratio, 2 * ratio, 30 * ratio)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV1.positionHorizontal + 30 * ratio, boucheV1.positionVertical + 15 * ratio, 2 * ratio, 30 * ratio)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV1.positionHorizontal + 50 * ratio, boucheV1.positionVertical + 15 * ratio, 2 * ratio, 30 * ratio)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV1.positionHorizontal + 70 * ratio, boucheV1.positionVertical + 15 * ratio, 2 * ratio, 30 * ratio)
    ctx.fillStyle = "rgb(238,130,238)"
    ctx.fillRect(boucheV1.positionHorizontal + 31 * ratio, boucheV1.positionVertical + 26 * ratio, 20 * ratio, 8 * ratio)
}

const background = new Image(1500, 850); // Using optional size for image
// Load an image of intrinsic size 300x227 in CSS pixels
background.src = "../image/" + localStorage.getItem("image");

function rafraichir() {

    if (perdu == false) {
        score++
        if (toucheQappuye) {
            cookie.positionHorizontal -= 10
        }
        if (toucheDappuye) {
            cookie.positionHorizontal += 10
        }
        if (toucheZappuye) {
            cookie.positionVertical -= 10
        }
        if (toucheSappuye) {
            cookie.positionVertical += 10
        }
    } else { }

    if (perdu == false && score > 100) {

        boucheV1.positionVertical += boucheV1.vitesseVertical
        boucheV2.positionVertical += boucheV2.vitesseVertical
        boucheV3.positionVertical += boucheV3.vitesseVertical
        boucheV4.positionVertical += boucheV4.vitesseVertical

        boucheH1.positionHorizontal += boucheH1.vitesseHorizontal
        boucheH2.positionHorizontal += boucheH2.vitesseHorizontal
        boucheH3.positionHorizontal += boucheH3.vitesseHorizontal




    }


    if (score % 500 == 0) {
        boucheV1.vitesseVertical = score / 500 + score / 1000 + boucheV1.vitesseVertical
        boucheV2.vitesseVertical = score / 500 + score / 1000 + boucheV1.vitesseVertical
        boucheV3.vitesseVertical = score / 500 + score / 1000 + boucheV1.vitesseVertical
        boucheV4.vitesseVertical = score / 500 - score / 1000 - boucheV1.vitesseVertical
        boucheH1.vitesseHorizontal = score / 500 + score / 1000 + boucheV1.vitesseVertical
        boucheH2.vitesseHorizontal = score / 500 + score / 1000 + boucheV1.vitesseVertical
        boucheH3.vitesseHorizontal = score / 500 - score / 1000 - boucheV1.vitesseVertical
        //ratiotaille = score/100+1
    }



    // decors
    //ctx.fillStyle = "rgb( 0 , 100, 150)"
    // ctx.fillRect(0, 0, 1500, 850)



    ctx.drawImage(background, 0, 0, 1500, 850);


    // cookie
    ctx.fillStyle = "rgb( 196, 129, 61)"
    ctx.fillRect(cookie.positionHorizontal, cookie.positionVertical, 100, 100)
    ctx.fillStyle = "rgb( 99, 62, 32)"
    ctx.fillRect(cookie.positionHorizontal + 14, cookie.positionVertical + 28, 10, 10)
    ctx.fillStyle = "rgb( 99, 62, 32)"
    ctx.fillRect(cookie.positionHorizontal + 80, cookie.positionVertical + 63, 10, 10)
    ctx.fillStyle = "rgb( 99, 62, 32)"
    ctx.fillRect(cookie.positionHorizontal + 62, cookie.positionVertical + 20, 15, 15)
    ctx.fillStyle = "rgb( 99, 62, 32)"
    ctx.fillRect(cookie.positionHorizontal + 22, cookie.positionVertical + 55, 12, 14)
    ctx.fillStyle = "rgb( 99, 62, 32)"
    ctx.fillRect(cookie.positionHorizontal + 45, cookie.positionVertical + 42, 9, 13)
    ctx.fillStyle = "rgb( 99, 62, 32)"
    ctx.fillRect(cookie.positionHorizontal + 60, cookie.positionVertical + 82, 8, 11)
    ctx.fillStyle = "rgb( 99, 62, 32)"
    ctx.fillRect(cookie.positionHorizontal + 38, cookie.positionVertical + 12, 11, 9)
    ctx.fillStyle = "rgb( 99, 62, 32)"
    ctx.fillRect(cookie.positionHorizontal + 25, cookie.positionVertical + 85, 12, 11)


    createBoucheV1(ratiotaille);

    // boucheV2
    ctx.fillStyle = "rgb( 30, 30, 50 )"
    ctx.fillRect(boucheV2.positionHorizontal, boucheV2.positionVertical, 80, 60)
    ctx.fillStyle = "rgb( 255, 00, 00 )"
    ctx.fillRect(boucheV2.positionHorizontal, boucheV2.positionVertical, 10, 60)
    ctx.fillStyle = "rgb( 255, 0, 0 )"
    ctx.fillRect(boucheV2.positionHorizontal + 70, boucheV2.positionVertical, 10, 60)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheV2.positionHorizontal, boucheV2.positionVertical, 80, 15)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheV2.positionHorizontal, boucheV2.positionVertical + 45, 80, 15)
    ctx.fillStyle = "rgb( 255, 255, 255 )"
    ctx.fillRect(boucheV2.positionHorizontal + 10, boucheV2.positionVertical + 15, 60, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV2.positionHorizontal + 10, boucheV2.positionVertical + 26, 60, 10)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV2.positionHorizontal, boucheV2.positionVertical + 30, 80, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV2.positionHorizontal + 10, boucheV2.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV2.positionHorizontal + 30, boucheV2.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV2.positionHorizontal + 50, boucheV2.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV2.positionHorizontal + 70, boucheV2.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb(238,130,238)"
    ctx.fillRect(boucheV2.positionHorizontal + 31, boucheV2.positionVertical + 26, 20, 8)
    // boucheV3
    ctx.fillStyle = "rgb( 30, 30, 50 )"
    ctx.fillRect(boucheV3.positionHorizontal, boucheV3.positionVertical, 80, 60)
    ctx.fillStyle = "rgb( 255, 00, 00 )"
    ctx.fillRect(boucheV3.positionHorizontal, boucheV3.positionVertical, 10, 60)
    ctx.fillStyle = "rgb( 255, 0, 0 )"
    ctx.fillRect(boucheV3.positionHorizontal + 70, boucheV3.positionVertical, 10, 60)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheV3.positionHorizontal, boucheV3.positionVertical, 80, 15)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheV3.positionHorizontal, boucheV3.positionVertical + 45, 80, 15)
    ctx.fillStyle = "rgb( 255, 255, 255 )"
    ctx.fillRect(boucheV3.positionHorizontal + 10, boucheV3.positionVertical + 15, 60, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV3.positionHorizontal + 10, boucheV3.positionVertical + 26, 60, 10)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV3.positionHorizontal, boucheV3.positionVertical + 30, 80, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV3.positionHorizontal + 10, boucheV3.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV3.positionHorizontal + 30, boucheV3.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV3.positionHorizontal + 50, boucheV3.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV3.positionHorizontal + 70, boucheV3.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb(238,130,238)"
    ctx.fillRect(boucheV3.positionHorizontal + 31, boucheV3.positionVertical + 26, 20, 8)
    // boucheV4
    ctx.fillStyle = "rgb( 30, 30, 50 )"
    ctx.fillRect(boucheV4.positionHorizontal, boucheV4.positionVertical, 80, 60)
    ctx.fillStyle = "rgb( 255, 00, 00 )"
    ctx.fillRect(boucheV4.positionHorizontal, boucheV4.positionVertical, 10, 60)
    ctx.fillStyle = "rgb( 255, 0, 0 )"
    ctx.fillRect(boucheV4.positionHorizontal + 70, boucheV4.positionVertical, 10, 60)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheV4.positionHorizontal, boucheV4.positionVertical, 80, 15)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheV4.positionHorizontal, boucheV4.positionVertical + 45, 80, 15)
    ctx.fillStyle = "rgb( 255, 255, 255 )"
    ctx.fillRect(boucheV4.positionHorizontal + 10, boucheV4.positionVertical + 15, 60, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV4.positionHorizontal + 10, boucheV4.positionVertical + 26, 60, 10)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV4.positionHorizontal, boucheV4.positionVertical + 30, 80, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV4.positionHorizontal + 10, boucheV4.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV4.positionHorizontal + 30, boucheV4.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV4.positionHorizontal + 50, boucheV4.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheV4.positionHorizontal + 70, boucheV4.positionVertical + 15, 2, 30)
    ctx.fillStyle = "rgb(238,130,238)"
    ctx.fillRect(boucheV4.positionHorizontal + 31, boucheV4.positionVertical + 26, 20, 8)
    // boucheH1
    ctx.fillStyle = "rgb( 30, 30, 50 )"
    ctx.fillRect(boucheH1.positionHorizontal, boucheH1.positionVertical, 60, 80)
    ctx.fillStyle = "rgb( 255, 00, 00 )"
    ctx.fillRect(boucheH1.positionHorizontal, boucheH1.positionVertical, 60, 10)
    ctx.fillStyle = "rgb( 255, 0, 0 )"
    ctx.fillRect(boucheH1.positionHorizontal, boucheH1.positionVertical + 70, 60, 10)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheH1.positionHorizontal, boucheH1.positionVertical, 15, 80)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheH1.positionHorizontal + 45, boucheH1.positionVertical, 15, 80)
    ctx.fillStyle = "rgb( 255, 255, 255 )"
    ctx.fillRect(boucheH1.positionHorizontal + 15, boucheH1.positionVertical + 10, 30, 60)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH1.positionHorizontal + 26, boucheH1.positionVertical + 10, 10, 60)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH1.positionHorizontal + 30, boucheH1.positionVertical, 2, 80)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH1.positionHorizontal + 15, boucheH1.positionVertical + 10, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH1.positionHorizontal + 15, boucheH1.positionVertical + 30, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH1.positionHorizontal + 15, boucheH1.positionVertical + 50, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH1.positionHorizontal + 15, boucheH1.positionVertical + 70, 30, 2)
    ctx.fillStyle = "rgb(238,130,238)"
    ctx.fillRect(boucheH1.positionHorizontal + 26, boucheH1.positionVertical + 31, 8, 20)
    // boucheH2
    ctx.fillStyle = "rgb( 30, 30, 50 )"
    ctx.fillRect(boucheH2.positionHorizontal, boucheH2.positionVertical, 60, 80)
    ctx.fillStyle = "rgb( 255, 00, 00 )"
    ctx.fillRect(boucheH2.positionHorizontal, boucheH2.positionVertical, 60, 10)
    ctx.fillStyle = "rgb( 255, 0, 0 )"
    ctx.fillRect(boucheH2.positionHorizontal, boucheH2.positionVertical + 70, 60, 10)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheH2.positionHorizontal, boucheH2.positionVertical, 15, 80)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheH2.positionHorizontal + 45, boucheH2.positionVertical, 15, 80)
    ctx.fillStyle = "rgb( 255, 255, 255 )"
    ctx.fillRect(boucheH2.positionHorizontal + 15, boucheH2.positionVertical + 10, 30, 60)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH2.positionHorizontal + 26, boucheH2.positionVertical + 10, 10, 60)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH2.positionHorizontal + 30, boucheH2.positionVertical, 2, 80)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH2.positionHorizontal + 15, boucheH2.positionVertical + 10, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH2.positionHorizontal + 15, boucheH2.positionVertical + 30, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH2.positionHorizontal + 15, boucheH2.positionVertical + 50, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH2.positionHorizontal + 15, boucheH2.positionVertical + 70, 30, 2)
    ctx.fillStyle = "rgb(238,130,238)"
    ctx.fillRect(boucheH2.positionHorizontal + 26, boucheH2.positionVertical + 31, 8, 20)

    // boucheH3
    ctx.fillStyle = "rgb( 30, 30, 50 )"
    ctx.fillRect(boucheH3.positionHorizontal, boucheH3.positionVertical, 60, 80)
    ctx.fillStyle = "rgb( 255, 00, 00 )"
    ctx.fillRect(boucheH3.positionHorizontal, boucheH3.positionVertical, 60, 10)
    ctx.fillStyle = "rgb( 255, 0, 0 )"
    ctx.fillRect(boucheH3.positionHorizontal, boucheH3.positionVertical + 70, 60, 10)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheH3.positionHorizontal, boucheH3.positionVertical, 15, 80)
    ctx.fillStyle = "rgb( 255, 10, 10 )"
    ctx.fillRect(boucheH3.positionHorizontal + 45, boucheH3.positionVertical, 15, 80)
    ctx.fillStyle = "rgb( 255, 255, 255 )"
    ctx.fillRect(boucheH3.positionHorizontal + 15, boucheH3.positionVertical + 10, 30, 60)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH3.positionHorizontal + 26, boucheH3.positionVertical + 10, 10, 60)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH3.positionHorizontal + 30, boucheH3.positionVertical, 2, 80)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH3.positionHorizontal + 15, boucheH3.positionVertical + 10, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH3.positionHorizontal + 15, boucheH3.positionVertical + 30, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH3.positionHorizontal + 15, boucheH3.positionVertical + 50, 30, 2)
    ctx.fillStyle = "rgb( 0, 0, 00 )"
    ctx.fillRect(boucheH3.positionHorizontal + 15, boucheH3.positionVertical + 70, 30, 2)
    ctx.fillStyle = "rgb(238,130,238)"
    ctx.fillRect(boucheH3.positionHorizontal + 26, boucheH3.positionVertical + 31, 8, 20)
    //  score
    ctx.fillStyle = "rgb( 0 , 0, 0)"
    ctx.font = "24px Verdana"
    ctx.fillText("pt:" + score, 1370, 50)

    if (cookie.positionVertical <= 0) {
        cookie.vitesseVertical = 0;
        cookie.positionVertical = 1
    }
    if (cookie.positionHorizontal <= 0) {
        cookie.vitesseHorizontal = 0;
        cookie.positionHorizontal = 1
    }
    if (cookie.positionVertical >= 750) {
        cookie.vitesseVertical = 0;
        cookie.positionVertical = 749
    }
    if (cookie.positionHorizontal >= 1400) {
        cookie.vitesseHorizontal = 0;
        cookie.positionHorizontal = 1399
    }
    if (boucheV1.positionVertical >= 940) {
        boucheV1.positionVertical = -100
        boucheV1.positionHorizontal = Math.random() * 1000
    }
    if (boucheV2.positionVertical >= 940) {
        boucheV2.positionVertical = -100
        boucheV2.positionHorizontal = Math.random() * 1300
    }

    if (boucheV3.positionVertical >= 940) {
        boucheV3.positionVertical = -100
        boucheV3.positionHorizontal = Math.random() * 1300
    }
    if (boucheV4.positionVertical <= -100) {
        boucheV4.positionVertical = 940
        boucheV4.positionHorizontal = Math.random() * 1300
    }

    if (boucheH1.positionHorizontal >= 1550) {
        boucheH1.positionHorizontal = -100
        boucheH1.positionVertical = Math.random() * 900
    }
    if (boucheH2.positionHorizontal >= 1550) {
        boucheH2.positionHorizontal = -100
        boucheH2.positionVertical = Math.random() * 900
    }
    if (boucheH3.positionHorizontal <= -100) {
        boucheH3.positionHorizontal = 1550
        boucheH3.positionVertical = Math.random() * 900
    }
    if (
        cookie.positionHorizontal + 100 > boucheV1.positionHorizontal &&
        cookie.positionHorizontal < boucheV1.positionHorizontal + 80 &&
        cookie.positionVertical + 100 > boucheV1.positionVertical &&
        cookie.positionVertical < boucheV1.positionVertical + 60) {

        ctx.fillStyle = "rgb( 0 , 0, 0)"
        ctx.font = "100px Verdana"
        ctx.fillText("Croqué!!", 520, 425)
        perdu = true
    }
    if (
        cookie.positionHorizontal + 100 > boucheV2.positionHorizontal &&
        cookie.positionHorizontal < boucheV2.positionHorizontal + 80 &&
        cookie.positionVertical + 100 > boucheV2.positionVertical &&
        cookie.positionVertical < boucheV2.positionVertical + 60) {

        ctx.fillStyle = "rgb( 0 , 0, 0)"
        ctx.font = "100px Verdana"
        ctx.fillText("Croqué!!", 520, 425)
        perdu = true
    }
    if (
        cookie.positionHorizontal + 100 > boucheV3.positionHorizontal &&
        cookie.positionHorizontal < boucheV3.positionHorizontal + 80 &&
        cookie.positionVertical + 100 > boucheV3.positionVertical &&
        cookie.positionVertical < boucheV3.positionVertical + 60) {

        ctx.fillStyle = "rgb( 0 , 0, 0)"
        ctx.font = "100px Verdana"
        ctx.fillText("Croqué!!", 520, 425)
        perdu = true
    }
    if (
        cookie.positionHorizontal + 100 > boucheV4.positionHorizontal &&
        cookie.positionHorizontal < boucheV4.positionHorizontal + 80 &&
        cookie.positionVertical + 100 > boucheV4.positionVertical &&
        cookie.positionVertical < boucheV4.positionVertical + 60) {

        ctx.fillStyle = "rgb( 0 , 0, 0)"
        ctx.font = "100px Verdana"
        ctx.fillText("Croqué!!", 520, 425)
        perdu = true
    }
    if (
        cookie.positionHorizontal + 100 > boucheH1.positionHorizontal &&
        cookie.positionHorizontal < boucheH1.positionHorizontal + 60 &&
        cookie.positionVertical + 100 > boucheH1.positionVertical &&
        cookie.positionVertical < boucheH1.positionVertical + 80) {

        ctx.fillStyle = "rgb( 0 , 0, 0)"
        ctx.font = "100px Verdana"
        ctx.fillText("Croqué!!", 520, 425)
        perdu = true
    }
    if (
        cookie.positionHorizontal + 100 > boucheH2.positionHorizontal &&
        cookie.positionHorizontal < boucheH2.positionHorizontal + 60 &&
        cookie.positionVertical + 100 > boucheH2.positionVertical &&
        cookie.positionVertical < boucheH2.positionVertical + 80) {

        ctx.fillStyle = "rgb( 0 , 0, 0)"
        ctx.font = "100px Verdana"
        ctx.fillText("Croqué!!", 520, 425)
        perdu = true
    }
    if (
        cookie.positionHorizontal + 100 > boucheH3.positionHorizontal &&
        cookie.positionHorizontal < boucheH3.positionHorizontal + 60 &&
        cookie.positionVertical + 100 > boucheH3.positionVertical &&
        cookie.positionVertical < boucheH3.positionVertical + 80) {

        ctx.fillStyle = "rgb( 0 , 0, 0)"
        ctx.font = "100px Verdana"
        ctx.fillText("Croqué!!", 520, 425)
        perdu = true
    }

}