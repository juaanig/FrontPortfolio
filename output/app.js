"use strict";
//============================= TAGS =================================
const contProject = document.getElementById("container-project");
const arrowDown = document.getElementById("arrow-down");
const arrowUp = document.getElementById("arrow-up");
//====================================================================
const toTop = () => { scrollTo(0, 0); };
// requestAnimationFrame(changeSection)
window.onscroll = function () {
    let y = window.scrollY;
    console.log(y);
    if (y > 695) {
        arrowUp === null || arrowUp === void 0 ? void 0 : arrowUp.classList.remove("d-none");
        arrowUp === null || arrowUp === void 0 ? void 0 : arrowUp.addEventListener("click", toTop);
        console.log("Entré");
    }
    else if (y < 695) {
        arrowUp === null || arrowUp === void 0 ? void 0 : arrowUp.removeEventListener("click", toTop);
        arrowUp === null || arrowUp === void 0 ? void 0 : arrowUp.classList.add("d-none");
        console.log("Entré en el else");
    }
};
// function disableScroll(){  
//   window.scrollTo(0, 0);
// }
// window.addEventListener('scroll', disableScroll);
// window.removeEventListener('scroll', disableScroll);
function changeSection(section) {
    // Switch para posicionar el display según el que botón que haya disparado la función
    switch (section) {
        case 1:
            scrollTo(0, 695);
            break;
        case 2:
            scrollTo(0, 1452);
            break;
    }
}
/* cuando se haga click en el botón cambiaran los estilos para que se renderise otro proyecto. */ 
