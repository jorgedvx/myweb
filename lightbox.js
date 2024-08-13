const hamburguer1 = document.querySelector('.hamburguer');
const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

console.log(imagenes)
console.log(imagenLight)

// let imagens = [...imagenes]


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        /* Muestra la direccion de la iamgen*/
        aparecerImagen(imagen.getAttribute('src'))
        
    })

})

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'

    }

})


const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'


}

