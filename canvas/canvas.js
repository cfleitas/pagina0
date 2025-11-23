
        //lo he desdenlazado desde el html
        //no lo coge bien si lo dejo aquí
        //parece que debe estar en el html
        
        
        var canvas = document.getElementById("miCanvas");
        var ctx = canvas.getContext("2d");

        // Dibujar un rectángulo azul
        ctx.fillStyle = "#0000FF";
        ctx.fillRect(50, 50, 150, 100);

        // Dibujar un círculo rojo
        ctx.beginPath();
        ctx.arc(300, 150, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();

        // Dibujar una línea verde
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.lineTo(450, 350);
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();

        //dibujando otro segmento:
        ctx.beginPath();
        ctx.moveTo(300,150);
        ctx.lineTo(450,350);
        ctx.strokeStyle ="#F0F0F0";
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.closePath();
        
        var canvas2 = document.getElementById("canvas2");
        var ctx2 = canvas2.getContext("2d");
        ctx2.fillStyle = "#0000FF";
        ctx2.fillRect(50, 50, 150, 100);


    