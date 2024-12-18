
document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector(".enlaces1");             
    let abrir = document.querySelector(".abrir");          
    let cerrar = document.querySelector(".cerrar");
    

    abrir.addEventListener("click", () => {
        menu.style.right = "0%";                        
    });

    cerrar.addEventListener("click", () => {
        menu.style.right = "100%";                                 
    });

    menu.addEventListener("mouseleave", () => {
        menu.style.right = "100%";                                 
    });




    const padre = document.querySelector("#PsliderE"); 
    const izq = document.querySelector("#izq"); 
    const der = document.querySelector("#der"); 
    let cont = 1;

    const obj = {
        1: `<div>
                <img src="../img/luffy.png" alt="">
            </div>
            <div>
                <h1>MONKEY D. LUFFY</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Monkey D. Luffy es el protagonista del anime y manga "One Piece". Su sueño es convertirse en el Rey de los Piratas y encontrar el tesoro legendario "One Piece". Luffy tiene el poder de la Gomu Gomu no Mi, que le permite estirarse como si fuera de goma. A lo largo de su viaje, forma la tripulación Sombrero de Paja, donde cada miembro persigue sus propios sueños. Su valentía y lealtad lo convierten en un personaje querido por millones.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
        2: `<div>
                <img src="../img/zoro.png" alt="">
            </div>
            <div>
                <h1>RORONOA ZORO</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Uno de los dos espadachines de los Piratas del Sombrero de Paja. Emplea un estilo único con tres espadas creado por él mismo. Sueña con ser el mejor espadachín del mundo para poder cumplir la promesa que le hizo a su difunta amiga de la infancia. Zoro era un cazarrecompensas conocido como "Cazador de Piratas". Cuando estaba a punto de ser ejecutado por la Marina, se dio cuenta de que la única forma de cumplir su sueño era aceptar la ayuda de Luffy para escapar.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
        3: `<div>
                <img src="../img/nami.png" alt="">
            </div>
            <div>
                <h1>NAMI</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Nami es la timonel de los Piratas del Sombrero de Paja. Era una ladrona profesional y, en un principio, se alió con los Sombrero de Paja para poder robarles. Se convirtió en la segunda miembro de la tripulación cuando Luffy y los demás salvaron su ciudad, que estaba controlada por Arlong y su banda pirata de los hombres pez. Su sueño es llegar a trazar un mapa de todo el mundo conocido.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
        4: `<div>
                <img src="../img/usopp.png" alt="">
            </div>
            <div>
                <h1>USOPP</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Usopp es el francotirador de los Piratas del Sombrero de Paja. Es cobarde y hace mucho el payaso, pero su destreza como tirador es sublime. Usopp conoció a los Sombrero de Paja cuando intentaba ahuyentarlos de su isla, aunque acabó haciéndose su amigo. Su padre, Yasopp, es un afamado pirata, francotirador de los Piratas del Pelirrojo, cuyo líder es Shanks el Pelirrojo, a quien Luffy admira.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
        5: `<div>
                <img src="../img/sanji.png" alt="">
            </div>
            <div>
                <h1>VINSMOKE SANJI</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Sanji es el cocinero de los Piratas del Sombrero de Paja. Antes era ayudante de cocina en el restaurante flotante Baratie. Se unió a los Piratas del Sombrero de Paja para cumplir su sueño de encontrar el legendario mar All Blue, donde se encuentra la fauna de todo el mundo. Su especialidad son las técnicas con patada, ya que no quiere dañarse las manos porque las necesita para cocinar.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
        6: `<div>
                <img src="../img/robin.png" alt="">
            </div>
            <div>
                <h1>NICO ROBIN</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Nico Robin es la arqueóloga de los Piratas del Sombrero de Paja. Se comió la fruta del diablo flor flor, así que puede hacer crecer cualquier parte de su cuerpo como una flor. Ha vivido perseguida desde joven porque tiene la rara capacidad de descifrar el misterioso lenguaje de los Foneglifos, y eso la convierte en una amenaza para el Gobierno Mundial.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
        7: `<div>
                <img src="../img/chopper.png" alt="">
            </div>
            <div>
                <h1>TONY TONY CHOPPER</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Chopper es el médico de la tripulación. Antes era un reno de nariz azul, pero se comió la fruta diabólica hombre hombre y adquirió habilidades humanas, convirtiéndose en un reno humano. En su ciudad le tenían miedo y lo consideraban un monstruo, pero conoció al Dr. Hiriluk y a Kureha, y decidió cumplir su sueño de convertirse en un médico capaz de curar cualquier enfermedad.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
        8: `<div>
                <img src="../img/franky.png" alt="">
            </div>
            <div>
                <h1>FRANKY</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Es el carpintero de los Piratas del Sombrero de Paja y un cíborg de los pies a la cabeza. Era el líder del Clan Franky en Water Seven y estaba reuniendo a todos los rufianes. Finalmente, se alió con los Piratas del Sombrero de Paja en contra de los agentes del gobierno. El sueño de Franky es construir un barco y circunnavegar el mundo en él. Para cumplirlo, se une a la tripulación y construye el Thousand Sunny, un nuevo barco que, según él, los llevará a salvo hasta el final de su aventura.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
        9: `<div>
                <img src="../img/brook.png" alt="">
            </div>
            <div>
                <h1>BROOK</h1>
                <img src="../img/decoracion1.png" alt="">
                <p>Brook es el músico de los Piratas del Sombrero de Paja. Es un humano resucitado que comió estando vivo la fruta revive revive y, después de morir, volvió a la vida en forma de esqueleto. Tras derrotar a Moria, Brook se une a los Piratas del Sombrero de Paja como octavo miembro de la tripulación. Sueña con reunirse al fin con Rabun, la ballena a la que tuvo que dejar antes de resucitar en forma de esqueleto.</p>
                <img src="../img/decoracion2.png" alt="">
            </div>`,
    };

    function mostrarP(cont) {
        const prev = cont === 1 ? 9 : cont - 1;
        const next = cont === 9 ? 1 : cont + 1;

        const slides = `
            <div class="extraP">${obj[prev]}</div>
            <div class="mainP">${obj[cont]}</div>
            <div class="extraP">${obj[next]}</div>
        `;

        padre.innerHTML = slides;
    }

    izq.addEventListener("click", () => {
        cont = cont === 1 ? 9 : cont - 1;
        mostrarP(cont);
    });

    der.addEventListener("click", () => {
        cont = cont === 9 ? 1 : cont + 1;
        mostrarP(cont);
    });

    mostrarP(cont);
});