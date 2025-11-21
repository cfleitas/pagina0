let contenedor;
let anchoContenedor, altoContenedor;
let contenedorX, contenedorY;

let pelota;
const tamanioPelota = 25;
let pelotaX, pelotaY;
let velocidadX = 1;
let velocidadY =  1;

window.addEventListener("load", iniciarJuego);

function iniciarJuego() {
    contenedor = document.getElementById("contenedor");
    mensajes = document.getElementById("mensajes");
    contenedorX = contenedor.getBoundingClientRect().left
    contenedorY = contenedor.getBoundingClientRect().top;
    anchoContenedor=contenedor.clientWidth;
    altoContenedor= contenedor.clientHeight;
    pelotaX = 200;
    pelotaY = 200;
    pelota = document.getElementById("pelota");
    pelota.style.width=tamanioPelota + 'px';
    pelota.style.display = "block";
    pelota.style.left = pelotaX + 'px';
    pelota.style.top = pelotaY + 'px';
    window.setInterval(moverPelota, 1); //lo uso para ver las coordenadas, no me interesa movimiento
    }

function moverPelota() {
    pelotaX += velocidadX;
    pelotaY += velocidadY;
    if (pelotaX + tamanioPelota > anchoContenedor || pelotaX < 0) {
        velocidadX = -velocidadX;
    }
    if (pelotaY + tamanioPelota > altoContenedor || pelotaY < 0) {
        velocidadY = -velocidadY;
    }
        
    pelota.style.left = pelotaX + 'px';
    pelota.style.top = pelotaY + 'px';
   // contenedor.innerHTML = "Coordenadas pelotaX: " + pelotaX + " , pelotaY: " + pelotaY ; va bien pero borra la pelota
    nuevoTexto = document.getElementById("aviso");


    nuevoTexto.innerText = "Coordenadas pelotaX: " + pelotaX + " , pelotaY: " + pelotaY ;
    //mensajes.appendChild(nuevoTexto);    
}
