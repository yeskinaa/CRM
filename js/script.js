const burger = document.querySelector('#burger')
const menu = document.querySelector('.menu')
const shadow = document.querySelector('.shadow')

burger.addEventListener('click', ()=>{
    menu.classList.toggle('active-menu')
    shadow.classList.toggle('active-shadow')
})