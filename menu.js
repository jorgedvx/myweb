const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');


// console.log(menu)
// console.log(hamburguer)


hamburguer.addEventListener('click', ()=> {
    menu.classList.toggle("spread");
})

window.addEventListener('click', e=>{

    if(menu.classList.contains('spread')
       && e.target != menu && e.target != hamburguer){
    menu.classList.toggle('spread')}
    


})

/* Parametro e / Apunta a cualquier parte de la pantalla*/
/* tooglee click aparece y desaparece*/

/* console.log(e.target); AL SELEC MUESTRA QUE ELEMENTO ES*/ 
