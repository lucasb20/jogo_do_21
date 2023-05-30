let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

const baralho = document.createElement('img')
baralho.src = 'imagens/baralho.jpg'

baralho.addEventListener('load',()=>{
    ctx.drawImage(baralho,0,0,200,200,200,200,200,200)
})