window.onload = () => {

    let imgs = document.querySelectorAll(".cardefect");
    let contador  = 0;
    let esquerda  = 0;
    let direita   = 0;
    let x, y, x1, x2, myElement;

    imgs.forEach(element => {

        element.addEventListener("mousedown",()=>{
            // Obtém a distância do ponteiro ao topo do elemento clicado
            y = event.clientY - element.getBoundingClientRect().top;
            x = event.clientX - element.getBoundingClientRect().left;
            x1 = event.clientX - element.parentElement.getBoundingClientRect().left;
            myElement = element;
        })
        element.addEventListener("dragend",()=>{

            element.style.transition = "100ms";

            x2 = event.clientX - element.parentElement.getBoundingClientRect().left;

            element.style.cursor = "grab";
            
            if(contador >= 4){
                contador = 2;
                for(img of imgs){
                    img.style.zIndex = contador;
                    contador++;
                }
                contador = 0;
            }
            
            let posicaoMouseContainer = mouseContainer();

            let py = posicaoMouseContainer[0] - y;
            let px = posicaoMouseContainer[1] - x;

            element.style.top  = py + "px";
            element.style.left = px + "px";

            element.style.zIndex = "1";
            contador++;
        
                /*let rotacao = "";

                // Obtém os estilos computados para o elemento
                var estilosComputados = window.getComputedStyle(element);

                // Obtém o valor da propriedade "transform" dos estilos computados
                var transformacao = estilosComputados.getPropertyValue('transform');

                if(transformacao == "matrix(0.99863, -0.052336, 0.052336, 0.99863, 0, 0)"){
                    rotacao = "3";
                } 
                if(transformacao == "matrix(0.99863, 0.052336, -0.052336, 0.99863, 0, 0)"){
                    rotacao = "3";
                }
                if(transformacao == "matrix(0.992546, 0.121869, -0.121869, 0.992546, 0, 0)"){
                    rotacao = "7";
                }
                if(transformacao == "matrix(0.992546, -0.121869, 0.121869, 0.992546, 0, 0)"){
                    rotacao = "7";
                }
                if(x1 > x2){
                    rotacao = "-" + rotacao; 
                }

                rotacao = "rotate(" + rotacao + "deg)";

                element.style.transform = rotacao;*/

                element.style.top  = "calc(50% - 175px)";
                element.style.left = "calc(50% - 110px)";
        })
        element.addEventListener("drag",()=>{

            element.style.transition = "0ms";
            element.style.cursor = "grabbing";
            
            let posicaoMouseContainer = mouseContainer();

            let py = posicaoMouseContainer[0] - y;
            let px = posicaoMouseContainer[1] - x;

            if(py > 0 && px > 0){
                element.style.top    = py + "px";
                element.style.left   = px + "px";
            }            
        })             
    });
    function mouseContainer(){
        
        // Obtém as coordenadas do ponteiro do mouse em relação ao elemento clicado
        var mouseX = event.clientX - myElement.parentElement.getBoundingClientRect().left;
        var mouseY = event.clientY - myElement.parentElement.getBoundingClientRect().top;

        return [mouseY,mouseX]
    }
}
