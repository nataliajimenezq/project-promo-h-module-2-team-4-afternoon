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
    card.classList.remove('theme-colors2');
    card.classList.remove('theme-colors3');
    card.classList.remove('theme-colors1');
    card.classList.add('theme-colors4');
    inputEmail.value = '';
    inputPhone.value = '';
    inputLinkedin.value = '';
    inputGit.value = '';
    name.value = '';
    position.value = '';
    clickTheme4.checked = true;
    clickTheme1.checked = false;
    clickTheme2.checked = false;
    clickTheme3.checked = false;
}

resetButton.addEventListener('click', reset);