   
   // funciona bien. Es fundamental
   // que la llamada desde el html
   // se haga después de haber cargado 
   // el canvas en el html.

   
   var canvas = document.getElementById("movimientoCanvas");
    var ctx = canvas.getContext("2d");

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    //voy a redefinir estas variables anteriores
    //para hacer aleatoria las trayectoria inicial
    // 
    dx = 1.4* Math.cos(2*Math.PI+Math.random());
    dy = 1.4* Math.sin(2*Math.PI+Math.random());
    let ultimoX =x;
    let ultimoY =y;
    var coordenadas = [];
    let nuevoTexto = document.getElementById("parrafoInfo");
    

    setInterval(draw, 5);
    
        
      function almacenaCoordenadas(xVal, yVal, array) {               
            array.push({x: xVal, y: yVal});
      }  
    
      almacenaCoordenadas(x,y,coordenadas); //valor inicial de la bolita


    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(50, 50, 150, 100);
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
        x += dx;
        y += dy;
        ultimoX =x;
        ultimoY =y;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height - 30);
        ctx.lineTo(ultimoX, ultimoY );
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();

       if (x + dx > canvas.width - 3 || x + dx < 3) {
            dx = -dx;
           almacenaCoordenadas(x,y,coordenadas);
           nuevoTexto.innerText += "\n Coordenadas: " + coordenadas[coordenadas.length-1].x + ", " + coordenadas[coordenadas.length-1].y; 

        }
        if (y + dy > canvas.height - 3 || y + dy < 3) {
            dy = -dy;
            almacenaCoordenadas(x,y,coordenadas);
            nuevoTexto.innerText += "\n Coordenadas: " + coordenadas[coordenadas.length-1].x + ", " + coordenadas[coordenadas.length-1].y;
        } 
       
        //voy a intentar dibujar la trayectoria a pelo:
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height - 30);
        for(let i=0; i<coordenadas.length; i++){
            ctx.lineTo(coordenadas[i].x, coordenadas[i].y );
        }
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();    


        
        
        pinta2();
        }

    

    //var coordenadas = [];
    //almacenaCoordenadas(3, 5, coordenadas);
    //almacenaCoordenadas(19, 1000, coordenadas);
    //almacenaCoordenadas(-300, 4578, coordenadas);

    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext("2d");

    let x2 = canvas2.width / 2;
    let y2 = canvas2.height - 30;
    //setInterval(pinta2, 10);
    
    function pinta2(){
        ctx2.beginPath();
        ctx2.moveTo(10,10);
        ctx2.lineTo(100,200); 
        ctx2.strokeStyle = "#00FF00";
        ctx2.lineWidth = 3;
        ctx2.stroke();
        ctx2.closePath();
    }

    

    