   
   // funciona bien. Es fundamental
   // que la llamada desde el html
   // se haga después de haber cargado 
   // el canvas en el html.
   
   
   var canvas = document.getElementById("movimientoCanvas");
    var ctx = canvas.getContext("2d");

    let x = canvas.width / 2;
    let y = canvas.height - 30;

        // Dibujar un rectángulo azul
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(50, 50, 150, 100);

    function draw() {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    setInterval(draw, 10);

    