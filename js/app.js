const btn_search = document.querySelector('#btn_search');
const search_form = document.querySelector('.search-form')

const btn_menu = document.querySelector('.btn_menu')
const header_menu = document.querySelector('.header_menu')

const btn_carrito = document.querySelector('.btn_carrito')
const carrito_compras = document.querySelector('.carrito_compras')

// bar search

btn_search.addEventListener('click',function(){
    search_form.classList.toggle('active');
    header_menu.classList.remove('active');
    carrito_compras.classList.remove('active');
})

// nav lateral en mobile y ipad

btn_menu.addEventListener('click',function(){
    header_menu.classList.toggle('active');
    search_form.classList.remove('active');
    carrito_compras.classList.remove('active');
    
})

// carrito de compras lateral en mobile y ipad

btn_carrito.addEventListener('click',function(){
    carrito_compras.classList.toggle('active');
    search_form.classList.remove('active');
    header_menu.classList.remove('active');
})

// Se eliminan al scrollear
window.onscroll = () =>{
    search_form.classList.remove('active');
    header_menu.classList.remove('active');
    carrito_compras.classList.remove('active');
}