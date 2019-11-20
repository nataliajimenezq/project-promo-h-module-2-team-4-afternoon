'use strict';

console.log('>> Ready :)');

//funcion para bajar con click el menu 
//funciona pero no ocula el no clikado //el segundo no se oculta a pesar de tener la clase hidden si quito display flex y web en f12  si ?
/*
const sectionDown = document.querySelectorAll('.down-form');
const arrowElement = document.querySelectorAll('.click-arrow');
for (let i = 0; i < arrowElement.length; i++) {
    arrowElement[i].addEventListener("click", function () {
        sectionDown[i].classList.toggle('hidden');
        arrowElement[i].classList.toggle('animate');
    });
}
*/

const elementFirstForm = document.querySelector ('#first-form');
const elementSeconsForm = document.querySelector ('#second-form');
const elementThirdForm = document.querySelector ('#third-form');

const elementArrowDesign = document.querySelector ('#arrow-design');
const elementArrowFill = document.querySelector ('#arrow-fill');
const elementArrowShare = document.querySelector ('#arrow-share');


const closeForm = () =>{
        elementFirstForm.classList.toggle('hidden');
        elementArrowDesign.classList.toggle('animate'); 
        elementThirdForm.classList.add('hidden');
        shareForm.classList.add('hidden');
        elementArrowShare.classList.remove('animate')

};
elementArrowDesign.addEventListener("click", closeForm);


const closeFill = () =>{
    elementFirstForm.classList.add('hidden');
    elementSeconsForm.classList.toggle('hidden');
    elementArrowDesign.classList.remove('animate')
    elementArrowFill.classList.toggle('animate');


}
elementArrowFill.addEventListener("click", closeFill );

const closeShare = () =>{
    elementSeconsForm.classList.add('hidden');
    elementThirdForm.classList.toggle('hidden');
    elementArrowFill.classList.remove('animate')
    elementArrowShare.classList.toggle('animate');
    shareForm.classList.add('hidden');

}

elementArrowShare.addEventListener("click", closeShare );


//boton crear tarjeta
const shareButton = document.querySelector ('#share_btn');
const shareForm = document.querySelector ('#share-div');

const openShare = () => {
    console.log ('holllllll');
    shareForm.classList.remove('hidden');
    
}

shareButton.addEventListener ('click', openShare);




//Función con la que se cambian los estilos de la tarjeta según la paleta de colores que elijamos.

const card = document.querySelector('.card__box');

console.log(card);
const clickTheme1 = document.querySelector('#colorpalette1');
const clickTheme2 = document.querySelector('#colorpalette2');
const clickTheme3 = document.querySelector('#colorpalette3');
const clickTheme4 = document.querySelector('#colorpalette4');

function changeTheme1() {
    console.log('TODO: cambiar a theme1');
    if (clickTheme1.checked) {
        card.classList.add('theme-colors1');
        card.classList.remove('theme-colors2');
        card.classList.remove('theme-colors3');
        card.classList.remove('theme-colors4');
    }
}
function changeTheme2() {
    console.log('TODO: cambiar a theme2');
    if (clickTheme2.checked) {
        card.classList.add('theme-colors2');
        card.classList.remove('theme-colors1');
        card.classList.remove('theme-colors3');
        card.classList.remove('theme-colors4');
    }
}
function changeTheme3() {
    console.log('TODO: cambiar a theme3');
    if (clickTheme3.checked) {
        card.classList.add('theme-colors3');
        card.classList.remove('theme-colors2');
        card.classList.remove('theme-colors1');
        card.classList.remove('theme-colors4');
    }
}
function changeTheme4() {
    console.log('TODO: cambiar a theme4');
    if (clickTheme4.checked) {
        card.classList.add('theme-colors4');
        card.classList.remove('theme-colors2');
        card.classList.remove('theme-colors3');
        card.classList.remove('theme-colors1');
    }
}

clickTheme1.addEventListener('click', changeTheme1);
clickTheme2.addEventListener('click', changeTheme2);
clickTheme3.addEventListener('click', changeTheme3);
clickTheme4.addEventListener('click', changeTheme4);


/***************************************************/
//Función para que al introducir los datos en los campos de nombre y trabajo, aparezcan en la tarjeta.

const name = document.querySelector('#name');
const position = document.querySelector('#position');
const cardName = document.querySelector('.card__name');
const cardPosition = document.querySelector('.card__job-title');

function changeCardName() {
    console.log('llamando a changeCardText');
    if (name.value.length === 0) {
        cardName.innerHTML = 'Nombre Apellido';
        console.log('funciona');
    } else {
        cardName.innerHTML = name.value;
    }
}
function changeCardPosition() {
    if (position.value.length === 0) {
        cardPosition.innerHTML = 'Front end developer';
        console.log('funciona');
    } else {
        cardPosition.innerHTML = position.value;
    }
}

name.addEventListener('keyup', changeCardName);
position.addEventListener('keyup', changeCardPosition);

/**********************************************************************/
//Función reset

const resetButton = document.querySelector('.card__reset');
const emailIcon = document.querySelector('.card__list--email');
const phoneIcon = document.querySelector('.card__list--phone');
const linkedinIcon = document.querySelector('.card__list--linkedin');
const githubIcon = document.querySelector('.card__list--github');

//const cardName = document.querySelector('.card__name');
//const cardPosition = document.querySelector('.card__job-title');

function reset() {
    console.log('función reset');
    cardName.innerHTML = 'Nombre Apellido';
    cardPosition.innerHTML = 'Front end developer';
    emailIcon.classList.add('hidden');
    phoneIcon.classList.add('hidden');
    linkedinIcon.classList.add('hidden');
    githubIcon.classList.add('hidden');
}

resetButton.addEventListener('click', reset);
//..........Mostrar los iconos del card preview........//


const gitIcon = document.querySelector('.card__list--github');


const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputLinkedin = document.querySelector('#linkedin');
const inputGit = document.querySelector('#git');


function showIconMail() {

    if (inputEmail.value.length > 0) {
        emailIcon.classList.remove('hidden');
    }
}

function showIconPhone() {

    if (inputPhone.value.length > 0) {
        phoneIcon.classList.remove('hidden');
    }
}

function showIconLinkedin() {

    if (inputLinkedin.value.length > 0) {
        linkedinIcon.classList.remove('hidden');
    }
}

function showIconGit() {

    if (inputGit.value.length > 0) {
        gitIcon.classList.remove('hidden');
    }
}


inputEmail.addEventListener('keyup', showIconMail);
inputPhone.addEventListener('keyup', showIconPhone);
inputLinkedin.addEventListener('keyup', showIconLinkedin);
inputGit.addEventListener('keyup', showIconGit);
