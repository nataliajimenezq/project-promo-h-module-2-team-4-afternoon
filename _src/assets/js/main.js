'use strict';

console.log('>> Ready :)');

//funcion para bajar con click el menu 

const menuDown = document.querySelector ('.down');
const menuArrow = document.querySelector ('.click-arrow');


function dropMenu (){
    menuDown.classList.toggle ('hidden');
    menuArrow.classList.toggle ('animate');
}

menuArrow.addEventListener ('click', dropMenu);