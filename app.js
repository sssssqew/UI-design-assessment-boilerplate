const modalContainer = document.querySelector('.modal-container')
const controls = modalContainer.querySelectorAll('button')


function closeModal(){
    modalContainer.classList.remove('show')
    document.body.style.overflow = ''
}

setTimeout(function(){
    modalContainer.classList.add('show')
    document.body.style.overflow = 'hidden'
}, 1000)

for(let button of controls){
    button.addEventListener('click', closeModal)
}