/*let contenedor = document.getElementById("divDePrueba");
let estilosContenedor = window.getComputedStyle(contenedor);
let anchoContenedor = estilosContenedor.width;
let altoContenedor = estilosContenedor.height;
let paddingContenedor = estilosContenedor.padding;
let borderContenedor = estilosContenedor.border;
let marginContenedor = estilosContenedor.margin;
//let escribirParrafo = document.getElementById("escribir");
escribirParrafo.innerText = "Ancho: " + anchoContenedor + ", Alto: " + altoContenedor + 
", Padding: " + paddingContenedor + ", Border: " + borderContenedor + 
", Margin: " + marginContenedor; */


//entiendo que las siguientes instrucciones
//ejecutan la función una vez
//y luego la vuelven a ejecutar cada 10 milisegundos
//no sé si es la mejor forma de hacerlo


window.addEventListener("load", escribir);
window.setInterval(escribir, 10);



function escribir(){
    let escribirParrafo = document.getElementById("escribir");
    let contenedor = document.getElementById("divDePrueba");
    //obtengo los estilos computados del contenedor
    //valores concretos de CSS aplicados:
    let estilosContenedor = window.getComputedStyle(contenedor);
    let anchoContenedor = estilosContenedor.width;
    let altoContenedor = estilosContenedor.height;
    let paddingContenedor = estilosContenedor.padding;
    let borderContenedor = estilosContenedor.border;
    let marginContenedor = estilosContenedor.margin;


    
    escribirParrafo.innerText ="mi texto nuevo";
    escribirParrafo.innerHTML = "<br>mi texto con innerHTML<br>";
    escribirParrafo.style.color = "red";

    escribirParrafo.innerText += "Ancho: " + anchoContenedor + ", Alto: " + altoContenedor + 
", Padding: " + paddingContenedor + ", Border: " + borderContenedor + 
", Margin: " + marginContenedor;

let otrasInformaciones = document.getElementById("informaciones");
//ya tengo el contenedor definido arriba
//obtengo ahora las coordendas de la esquina superior izquierda
//incluyendo border y padding
//respecto de la ventana del navegador (0,0) esquina sup izqda
//todo esto con getBoundingClientRect()
//y devuelto en pixeles:

contenedorX=contenedor.getBoundingClientRect().left;
contenedorY=contenedor.getBoundingClientRect().top;
let anchoDelContenedor=contenedor.clientWidth;
let altoDelContenedor= contenedor.clientHeight;


otrasInformaciones.style.backgroundColor = "lightgreen";    


otrasInformaciones.innerText = "El valor left boundingClientRect es: " + contenedorX +
" y el valor top boundingClientRect es: " + contenedorY;
otrasInformaciones.innerText += "\n El ancho del contenedor es: " + anchoDelContenedor +
" y el alto del contenedor es: " + altoDelContenedor;


    


}
// escribirParrafo.style.backgroundColor = "yellow";


