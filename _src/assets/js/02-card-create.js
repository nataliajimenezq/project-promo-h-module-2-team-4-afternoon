
//boton crear tarjeta
const shareButton = document.querySelector('#share_btn');
const shareForm = document.querySelector('#share-div');
const elementError = document.querySelector('.errorMessage');
const elementInputs = document.querySelectorAll('input');
const label = document.querySelector('label');

/* const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputLinkedin = document.querySelector('#linkedin'); */
/* const inputGit = document.querySelector('#git'); 

 */
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
  if (validation()) {
    elementError.innerHTML = '';
    shareButton.classList.add('disabled');
    shareButton.setAttribute('disabled', 'true');
    shareForm.classList.remove('hidden');

  } else {
    elementError.innerHTML = '*Rellene todos los campos obligatorios.';
  }
}

shareButton.addEventListener('click', sendInfo);


