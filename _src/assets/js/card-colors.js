//Función para cambiar los colores de la tarjeta

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

