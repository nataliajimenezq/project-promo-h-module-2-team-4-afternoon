'use strict';


const clickTheme1 = document.querySelector('#colorpalette1');
const clickTheme2 = document.querySelector('#colorpalette2');
const clickTheme3 = document.querySelector('#colorpalette3');
const clickTheme4 = document.querySelector('#colorpalette4');

const emailIcon = document.querySelector('.card__list--email');
const phoneIcon = document.querySelector('.card__list--phone');
const linkedinIcon = document.querySelector('.card__list--linkedin');
const githubIcon = document.querySelector('.card__list--github');

//sobre el que se ejecutan las funciones del localstorage
const formFill = document.querySelector('#form__fill');
const formDesing = document.querySelector('#form_desing');

//función que obtiene los values del form y los guarda en localstorafge

function setData(){
//datos introducidos por el usuario en el formulario
  let nameValue = name.value;
  let jobValue = position.value;
  let emailValue = inputEmail.value;
  let phoneValue = inputPhone.value;
  let linkedinValue = inputLinkedin.value;
  let githubValue = inputGit.value;
  let photoValue = profileImage.style.backgroundImage;
  let paletteValue = document.querySelector('.form-item:checked').value;

  //creamos un objeto con los values del formulario
  const data = {
    name: nameValue,
    job: jobValue,
    email: emailValue,
    phone: phoneValue,
    linkedin: linkedinValue,
    github: githubValue,
    photoUrl: photoValue,
    palette: paletteValue

  };
  //al ser un objeto lo convertimos en una cadena de texto JSON para guardarlo en local
  localStorage.setItem('data', JSON.stringify(data));
}

//función que devuelve el objeto en el localstorage y se la envía a showData para mostrarla
const getData = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  showData(data);
};
//si refrescamos la página, se cargan los datos guardados en localStorage
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
    let palette = parseInt(data.palette);
    console.log(palette);
    card.classList.remove('clickTheme1', 'clickTheme2', 'clickTheme3', 'clickTheme4');
    card.classList.add('palette'+palette);
    if(palette===4){
      colorpalette[0].checked = true;
      card.classList.add('clickTheme4');
    }else if(palette===1){
      colorpalette[1].checked = true;
      card.classList.add('clickTheme1');
    }else if(palette===2){
      colorpalette[2].checked = true;
      card.classList.add('clickTheme2');
    }else{
      colorpalette[3].checked = true;
      card.classList.add('clickTheme3');
    }
    changecolor();


    //pintamos los datos en la tarjeta
    data.name === '' ? cardName.innerHTML = 'Nombre Apellido' : cardName.innerHTML = data.name;
    data.job === '' ? cardPosition.innerHTML = 'Front end developer' : cardPosition.innerHTML = data.job;
    data.phone === '' ? (
      phoneLink.href = '')
      : (
        phoneLink.href = `tel:${data.phone}`,
        phoneIcon.classList.remove('hidden')
      );
    data.email === '' ? (
      emailLink.href = '')
      : (
        emailLink.href = `mailto:${data.email}`,
        emailIcon.classList.remove('hidden')
      );
    data.linkedin === '' ? (
      linkedinLink.href = '')
      : (
        linkedinLink.href = `http://www.linkedin.com/in/${data.linkedin}`,
        //linkedinLink.target='_blank',
        linkedinIcon.classList.remove('hidden')
      );
    data.github === '' ? (
      githubLink.href = '')
      : (
        githubLink.href = `https://www.github.com/${data.github}`,
        //githubLink.target='_blank',
        githubIcon.classList.remove('hidden')
      );
  }

};

//evento que guarda en localstorage los inputs del formulario al pulsar las teclas
formFill.addEventListener('keyup', setData);
formDesing.addEventListener('change', setData);
//evento que se ejecuta al cargar la página y llama a la función que devuelve y pinta los values guardados en localStorage
window.addEventListener('load', getData);



