'use strict';

// import { createDecipher } from "crypto";
const clickTheme1 = document.querySelector('#colorpalette1');
const clickTheme2 = document.querySelector('#colorpalette2');
const clickTheme3 = document.querySelector('#colorpalette3');
const clickTheme4 = document.querySelector('#colorpalette4');

const emailIcon = document.querySelector('.card__list--email');
const phoneIcon = document.querySelector('.card__list--phone');
const linkedinIcon = document.querySelector('.card__list--linkedin');
const githubIcon = document.querySelector('.card__list--github');
const colorSelected = document.querySelector('.color_selected');

function getData(){

const nameValue = name.value;
const jobValue = position.value;
const emailValue = inputEmail.value;
const phonelValue = inputPhone.value;
const linkedinValue = inputLinkedin.value;
const githubValue = inputGit.value;
const photoValue = profileImage.style.backgroundImage;
const paletteValue = document.querySelector('.form-item:checked').value;


const data = {
    name: nameValue,
    job: jobValue,
    email: emailValue,
    phone: phonelValue,
    linkedin: linkedinValue,
    github: githubValue,
    photoUrl: photoValue,
    palette: paletteValue

};

localStorage.setItem('data', JSON.stringify(data));
}

const showData = (data) =>{
    if(data){
        //asignamos los datos guardados al formulario
        name.value = data.name;
        position.value = data.job;
        inputEmail.value = data.email;
        inputPhone.value = data.phone;
        inputLinkedin.value = data.linkedin;
        inputGit.value = data.github;
        profileImage.style.backgroundImage = data.photoUrl;
        profilePreview.style.backgroundImage = data.photoUrl;
        //pintamos los datos en los radios buttons y en la paleta
        paletteValue = data.palette;
        console.log(paletteValue);
        let palette = parseInt(data.palette) + 1;
        console.log(palette);
        card.classList.remove('clickTheme1', 'clickTheme2', 'clickTheme3', 'clickTheme4');
        card.classList.add('palette' + palette);
        if(palette===1){
            colorpalette[0].checked = true;
        }else if(palette===2){
            colorpalette[1].checked = true;
        }else if(palette===3){
            colorpalette[2].checked = true;
        }else{
            colorpalette[3].checked = true;
        }
        

        const defaultInfo = {
            //palette: 4,
            cardName : 'Nombre Apellido',
            cardPosition : 'Front end developer',
            inputEmail : '',
            inputPhone : '',
            inputLinkedin : '',
            inputGit : '',
        };
        
        //pintamos los datos en la tarjeta
        name.value === '' ? cardName.innerHTML = defaultInfo.cardName : cardName.innerHTML = name.value;
        position.value === '' ? cardPosition.innerHTML = defaultInfo.cardPosition : cardPosition.innerHTML = position.value;

        //data.phone === '' ? phoneIcon.href = '' : phoneIcon.href = data.phone;
        emailIcon.classList.remove('hidden');
        phoneIcon.classList.remove('hidden');
        linkedinIcon.classList.remove('hidden');
        githubIcon.classList.remove('hidden');
        // data.email === '' ? document.querySelector('.js-email').href = '' : document.querySelector('.js-email').href = 'mailto:' + data.email;
        // data.linkedin === '' ? document.querySelector('.js-linkedin').href = '' : document.querySelector('.js-linkedin').href = 'https://www.linkedin.com/in/' + data.linkedin;
        // data.github === '' ? document.querySelector('.js-github').href = '' : document.querySelector('.js-github').href = 'https://github.com/' + data.github;


    }

}

const keepData = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    showData(data);
}

keepData();
colorSelected.addEventListener('change', getData);
shareButton.addEventListener('click', getData);




