let menuVisible = false;

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

//oculto el menu una vez selecciono una opcion
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("javascript");
    }

}

//detecto el scrolling para aplicaar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}