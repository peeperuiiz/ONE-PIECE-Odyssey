
document.addEventListener("DOMContentLoaded", () => {
    // SLIDER PERSONAJES
    const elements = document.querySelectorAll(".PsliderE");
    const izq = document.querySelector("#izq");
    const der = document.querySelector("#der");
    let cont = 0;
    let contAux1 = 0;
    let contAux2 = 0;


    function mostrarP(cont) {
        if((cont - 1) == -1){
            contAux1 = 8;
        }else{
            contAux1 = cont-1
        }
        
        if((cont + 1) == 9){
            contAux2 = 0;  
        }else{
            contAux2 = cont+1;
        }

        elements[contAux1].classList.add("extraP");
        elements[contAux1].style.display = "block";

        elements[cont].classList.add("mainP");
        elements[cont].style.display = "block";


        elements[contAux2].classList.add("extraP");
        elements[contAux2].style.display = "block";
        
        for (let i = 0; i < elements.length; i++) {
            if(i != contAux1 && i != cont && i != contAux2){
                elements[i].style.display = "none";
            }
        }
    }


    mostrarP(cont);

    izq.addEventListener("click", () => {
        if((cont-1) == -1) cont = 8;
        else cont -= 1;

        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("mainP");
            elements[i].classList.remove("extraP");
        }

        mostrarP(cont);
    });

    der.addEventListener("click", () => {
        if((cont+1) == 9) cont = 8;
        else cont += 1;

        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("mainP");
            elements[i].classList.remove("extraP");
        }

        mostrarP(cont);
    });
});