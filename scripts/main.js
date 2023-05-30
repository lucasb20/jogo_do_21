let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

const baralho = document.createElement('img')
baralho.src = 'imagens/baralho_otim.png'

const card_cutx=80,card_cuty=124

class Card{
    constructor(card_x,card_y,card_rec_posx,card_rec_posy,card_remx,card_remy){
        this.card_recorx = card_cutx
        this.card_recory = card_cuty
        this.card_rec_posx = card_rec_posx
        this.card_rec_posy = card_rec_posy
        this.card_x = card_x
        this.card_x = card_y
        this.card_remx = card_remx
        this.card_remy = card_remy
    }
}

function build_deck(){
    const hearts = ['a',2,3,4,5,6,7,8,9,10,'j','q','k']
    const spades = ['a',2,3,4,5,6,7,8,9,10,'j','q','k']
    const diamonds = ['a',2,3,4,5,6,7,8,9,10,'j','q','k']
    const clubs = ['a',2,3,4,5,6,7,8,9,10,'j','q','k']
    const deck = [hearts,spades,diamonds,clubs]
}

//drawImage(imagem,posx recorte, posy recorte, tamx recorte, tamy recorte, coord x, coord y, rem x, rem y)
/* 
baralho.addEventListener('load',()=>{
    ctx.drawImage(baralho,0,0,card_cutx,card_cuty,20,20,40,62)  
}) */