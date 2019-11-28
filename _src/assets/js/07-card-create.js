
//boton crear tarjeta
const shareButton = document.querySelector('#share_btn');
const shareForm = document.querySelector('#share-div');
const elementError = document.querySelector('.errorMessage');
const elementInputs = document.querySelectorAll('input');
const label = document.querySelector('label');
const shareFormLink =document.querySelector('.share__create-card'); 


const validation = () => {
  let hasErrors = false;
  for (let input of elementInputs) {
    if (input.value === "" && input.type !== 'tel') {
      hasErrors = true;
      input.classList.add('error');
    }
  };
  return !hasErrors;
};

const sendInfo = () => {

  const sendPhoto=fr.result;
  console.log(sendPhoto);

  const userData = {

    "palette": colorpalette.value,
    "name": name.value,
    "job": position.value,
    "phone": inputPhone.value,
    "email": inputEmail.value,
    "linkedin": inputLinkedin.value,
    "github": inputGit.value,
    "photo": sendPhoto
  };

  if (validation()) {
    elementError.innerHTML = '';
    shareButton.classList.add('disabled');
    shareButton.setAttribute('disabled', 'true');
    shareForm.classList.remove('hidden');

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => showUrlUser(data))
      .catch(function (error) { console.log(error)})

  } else {
    elementError.innerHTML = '*Rellene todos los campos obligatorios.';
  }
}


//peticion

/* function sendFetch() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => showUrlUser(data))
    .catch(function (error) { console.log(error); });

} */

function showUrlUser(data) {

  const elementLink = document.createElement('a');

  if (data.success) {
    shareForm.classList.remove('hidden')
    elementLink.setAttribute('href', `${data.cardURL}`);
    elementLink.setAttribute('class', 'share__create-card');
    elementLink.setAttribute('target', '_blank');
    elementLink.innerHTML=`${data.cardURL}`;
 
    shareFormLink.appendChild(elementLink);
  } else {
    data.error.innerHTML = '';
    /* const textLink = document.createTextNode(`ERROR: ${data.error}.`);
    error.appendChild(textLink); */
  }
};

shareButton.addEventListener('click',sendInfo)