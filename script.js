const category = document.querySelectorAll('.category')

for (let i = 0; i < category.length; i++){
    category[i].addEventListener('click', () => {
        category[i].nextElementSibling.classList.toggle('show-content')
        category[i].childNodes[1].classList.toggle('rotate')
    })
}

const menuItem = document.querySelectorAll('.menu-item')

for (let i = 0; i < menuItem.length; i++){
    menuItem[i].addEventListener('click', () => {
        menuItem[i].classList.toggle('item-selected')
    })
}

const seeSelected = document.querySelector('#seeSelected')
const modalBtn = document.querySelector('.modal__btn')
const modal = document.querySelector('.modal')
const itemsContainer = document.querySelector('#itemsContainer')
let pre = ''

seeSelected.addEventListener('click', () => {
   const itemsSel = document.querySelectorAll('.item-selected')    
    for (let i = 0; i < itemsSel.length; i++){
        let newItemSel = itemsSel[i].cloneNode(true)
        itemsContainer.appendChild(newItemSel)        
    }    
    modal.classList.add('go')
    modal.classList.remove('come-back')
})

modalBtn.addEventListener('click', () => {    
    modal.classList.remove('go')
    modal.classList.add('come-back')
    itemsContainer.innerHTML = ''
})