//boton crear tarjeta
const shareButton = document.querySelector ('#share_btn');
const shareForm = document.querySelector ('#share-div');

const openShare = () => {
    console.log ('holllllll');
    shareForm.classList.remove('hidden');
    
}

shareButton.addEventListener ('click', openShare);
