'use strict';

// console.log('>> Ready :)');

//función para bajar con click el menu 
/*
const sectionDown = document.querySelectorAll('.down');
const arrowElement = document.querySelectorAll('.click-arrow');
const arrowClickElement = document.querySelectorAll('.arrow');

for (let i = 0; i < arrowElement.length; i++) {
    arrowElement[i].addEventListener("click", function () {
        sectionDown[i].classList.toggle('hidden');
        arrowClickElement[i].classList.toggle('animate');
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