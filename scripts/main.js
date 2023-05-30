let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

const baralho = document.createElement('img')
baralho.src = 'imagens/baralho_otim.png'

const card_cutx=62,card_cuty=87

class Card{
    constructor(card_x,card_y,card_rec_posx,card_rec_posy,card_remx,card_remy){
        this.card_recorx = card_cutx
        this.card_recory = card_cuty
        this.card_rec_posx = card_rec_posx
        this.card_rec_posy = card_rec_posy
        this.card_x = card_x
        this.card_x = card_y
        this.card_remx
        this.card_remy
    }
}

//drawImage(imagem,posx recorte, posy recorte, tamx recorte, tamy recorte, coord x, coord y, rem x, rem y)

baralho.addEventListener('load',()=>{
    ctx.drawImage(baralho,0,0,card_cutx,card_cuty,30,30,100,100)  
})