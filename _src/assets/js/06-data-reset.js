'use strict';

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

const resetData = () =>{
    localStorage.removeItem('data');
}

shareButton.addEventListener('click', getData);




