let arrayImagens = ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg", "img05.jpg", "img06.jpg"];
let intervalId;
let real = true;

window.onload = () => {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[0];
    img[1].src = "img/" + arrayImagens[0];
    img[2].src = "img/" + arrayImagens[1];
    img[3].src = "img/" + arrayImagens[2];
    img[4].src = "img/" + arrayImagens[3];
    img[5].src = "img/" + arrayImagens[4];
    img[6].src = "img/" + arrayImagens[5];
    if (real) {
        intervalId = setInterval(Testa, 700);
    }
    img[1].addEventListener('mouseover', stopInterval);
    img[1].addEventListener('mouseout', startInterval);
    img[2].addEventListener('mouseover', stopInterval);
    img[2].addEventListener('mouseout', startInterval);
    img[3].addEventListener('mouseover', stopInterval);
    img[3].addEventListener('mouseout', startInterval);
    img[4].addEventListener('mouseover', stopInterval);
    img[4].addEventListener('mouseout', startInterval);
    img[5].addEventListener('mouseover', stopInterval);
    img[5].addEventListener('mouseout', startInterval);
    img[0].addEventListener('mouseout', startInterval);
}

let cont = 1;
function Testa() {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[cont];
    cont++;
    if (cont == 6) {
        cont = 0;
    }
}

function stopInterval() {
    clearInterval(intervalId);
}

function startInterval() {
    if (!real) {
        intervalId = setInterval(Testa, 1000);
        real = true;
    }
}

function changeImage(index) {
    let img = document.getElementsByTagName('img');
    img[0].src = "img/" + arrayImagens[index];
    real = false;
    stopInterval();
}
