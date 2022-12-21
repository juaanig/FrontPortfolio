//============================= TAGS =================================
const contProject = document.getElementById("container-project");
const arrowDown = document.getElementById("arrow-down"); 
const arrowUp = document.getElementById("arrow-up");
//====================================================================

const toTop = () => { scrollTo(0,0); }

// Función para la visualización de la flecha "ir inicio"
window.onscroll = function():void {
  
  let y = window.scrollY;  

  if( y > 695 ){
    arrowUp?.classList.remove("d-none");
    arrowUp?.addEventListener("click",toTop);
  }else if(y < 695){
    arrowUp?.removeEventListener("click",toTop);
    arrowUp?.classList.add("d-none");
    console.log("Entré en el else")
    
  } 
    
};
//====================================================================

function changeSection(section:number):void{
    
  // Switch para posicionar el display según el que botón que haya disparado la función
  switch(section){
    case 1:
      scrollTo(0,695);
      break;
    case 2:
      scrollTo(0,1452);
      break;
  }

}








/* cuando se haga click en el botón cambiaran los estilos para que se renderise otro proyecto. */