let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

const canvas_width = 300,canvas_height = 150

const baralho = document.createElement('img')
baralho.src = 'imagens/baralho_otim.png'

const card_tamx=45,card_tamy=60
const card_cutx=79,card_cuty=124

const pdeck_x=60,pdeck_y=80
const hdeck_x=75,hdeck_y=40

const player_hand = [], house_hand =[]

const deck = []
function build_deck(deck){
    for(let i=1;i<=13;i++){
        let aux = []
        let posx = 0 + (i-1)*(card_cutx)
        let posy = 0
        aux.push('clubs')
        switch(i){
            case 1:
                aux.push('a')
            break
            case 11:
                aux.push('j')
            break
            case 12:
                aux.push('q')
            break
            case 13:
                aux.push('k')
            break
            default:
                aux.push(i)
            break
        }
        aux.push(posx)
        aux.push(posy)
        deck.push(aux)
    }
}

baralho.addEventListener('load',init)

function init(){
    ctx.font = '10px Arial'
    ctx.fillText(`Press D for deal 1 more card, H for hold, and N for new game.`,5,10)
    build_deck(deck)
    console.log(deck)
    ctx.drawImage(baralho,deck[4][2],deck[4][3],card_cutx,card_cuty,pdeck_x,pdeck_y,card_tamx,card_tamy)
    ctx.drawImage(baralho,deck[5][2],deck[5][3],card_cutx,card_cuty,pdeck_x+10,pdeck_y,card_tamx,card_tamy)
}

window.addEventListener('keydown',(event) => {
    switch(event.key){
        case 'd':
            deal()
            break
        case 'h':
            hold()
            break
        case 'n':
            new_game()
            break
    }
})

function deal(){}

function hold(){}

function new_game(){}