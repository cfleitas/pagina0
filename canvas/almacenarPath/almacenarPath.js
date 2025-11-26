
//para pintar en el canvas principal:
const canvas = document.getElementById("dibujarCanvas");
const ctx = canvas.getContext("2d");
const ctx2 = canvas.getContext("2d");

//para pintar en el otro canvas la copia del path:  
const canvas3 = document.getElementById("dibujarCopiaCanvas");
const ctx3= canvas3.getContext("2d");

let pathDatos = [];

function almacenarPath(xVal, yVal, array) {               
            array.push({x: xVal, y: yVal});
      }

canvas.addEventListener("click", function(event){
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top; 
    almacenarPath(x, y, pathDatos);
    dibujarPunto(x, y);
    dibujarLinea(x,y);
    actualizarInfo();
    copiarPath();
});

function dibujarPunto(x, y){
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
        }   

function dibujarLinea(x, y){
    if(pathDatos.length > 1){
        const puntoAnterior = pathDatos[pathDatos.length - 2];  

        /*Esto es lo que hice al principio, pero veo que 
        usando ctx funciona igual:
        es decir con un ctx hago los dibujos
        de los puntos  y de los segmentos
        en el mismo canvas:
        
        ctx.strokeStyle = "red";
        ctx2.strokeStyle = "red";
        ctx2.beginPath();
        ctx2.moveTo(puntoAnterior.x, puntoAnterior.y);  
        ctx2.lineTo(x, y);
        ctx2.stroke();
        ctx2.closePath();*/

        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(puntoAnterior.x, puntoAnterior.y);  
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
    }   
}

function copiarPath(){
    if(pathDatos.length > 1) {
        ctx3.fillStyle = "green";
        ctx3.beginPath();
        ctx3.moveTo(pathDatos[0].x, pathDatos[0].y);    
        for(let i=1; i<pathDatos.length; i++){
            ctx3.lineTo(pathDatos[i].x, pathDatos[i].y); 
        }
        ctx3.stroke();
        ctx3.closePath();       

    }   
}
    
    
    function actualizarInfo(){
    let infoParrafo = document.getElementById("infoPath");
    infoParrafo.innerText = "Puntos almacenados:\n";    
    for(let i=0; i<pathDatos.length; i++){
        infoParrafo.innerText += "Punto "+ i +": x= "+pathDatos[i].x +", y= "+pathDatos[i].y +"\n";
    }   
}


       


