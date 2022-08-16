window.addEventListener('DOMContentLoaded', ()=>{

let dropdown = document.querySelector('.dropdown')
let dropdownValue = document.querySelector('.dropdown__value')
let dropdownList = document.querySelector('.dropdown__list')
let dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'))


for (let i = 0; i < dropdownLink.length; i++){

    dropdownLink[i].addEventListener('click', (e)=>{

        e.preventDefault()
        console.log(dropdownLink[i])
        dropdownValue.textContent = dropdownLink[i].textContent
    });
};

dropdown.addEventListener('click', ()=> {
    if (dropdownList.classList.contains('dropdown__list_active')) {

        dropdownList.classList.remove('dropdown__list_active')
    }
    else {
        dropdownList.classList.add('dropdown__list_active')
    };
});


});