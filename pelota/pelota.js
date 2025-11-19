let anchoVentana, altoVentana;

let pelota;
const tamanoPelota = 20;
let pelotaX, pelotaY;
let velocidadX = 1;
let velocidadY = 1;

window.addEventListener('load', iniciarJuego);

function iniciarJuego() {
    anchoVentana = window.innerWidth;
    altoVentana = window.innerHeight;
    pelotaX = (anchoVentana - tamanoPelota) / 2;
    pelotaY = (altoVentana - tamanoPelota) / 2;
    pelota = document.getElementById('pelota');
    pelota.style.width = tamanoPelota + 'px';
    pelota.style.display = 'block';
    pelota.style.left = pelotaX + 'px';
    pelota.style.top = pelotaY + 'px';
    window.setInterval(moverPelota, 3);
}

function moverPelota() {
    pelotaX += velocidadX;
    pelotaY += velocidadY;  
    if (pelotaX + tamanoPelota >= anchoVentana || pelotaX <= 0) {
        velocidadX = -velocidadX;
    }   
    if (pelotaY + tamanoPelota >= altoVentana || pelotaY <= 0) {
        velocidadY = -velocidadY;
    }
    pelota.style.left = pelotaX + 'px';
    pelota.style.top = pelotaY + 'px';
}

