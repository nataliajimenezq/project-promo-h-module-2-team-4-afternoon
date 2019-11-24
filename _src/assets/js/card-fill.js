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


inputEmail.addEventListener('keyup', showIcons);
inputPhone.addEventListener('keyup', showIcons);
inputLinkedin.addEventListener('keyup', showIcons);
inputGit.addEventListener('keyup', showIcons);