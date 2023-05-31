let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

const canvas_width = 300,canvas_height = 150

const baralho = document.createElement('img')
baralho.src = 'imagens/baralho_otim.png'

const card_tamx=45,card_tamy=60
const card_cutx=79,card_cuty=123

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

    for(let i=1;i<=13;i++){
        let aux = []
        let posx = 0 + (i-1)*(card_cutx)
        let posy = card_cuty
        aux.push('diamonds')
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

    for(let i=1;i<=13;i++){
        let aux = []
        let posx = 0 + (i-1)*(card_cutx)
        let posy = card_cuty*2
        aux.push('hearts')
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

    for(let i=1;i<=13;i++){
        let aux = []
        let posx = 0 + (i-1)*(card_cutx)
        let posy = card_cuty*3
        aux.push('spadas')
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
    ctx.drawImage(baralho,deck[10][2],deck[10][3],card_cutx,card_cuty,pdeck_x,pdeck_y,card_tamx,card_tamy)
    ctx.drawImage(baralho,deck[18][2],deck[18][3],card_cutx,card_cuty,pdeck_x+10,pdeck_y,card_tamx,card_tamy)
    ctx.drawImage(baralho,deck[29][2],deck[29][3],card_cutx,card_cuty,pdeck_x+20,pdeck_y,card_tamx,card_tamy)
    ctx.drawImage(baralho,deck[39][2],deck[39][3],card_cutx,card_cuty,pdeck_x+30,pdeck_y,card_tamx,card_tamy)
    ctx.drawImage(baralho,2*card_cutx,4*card_cuty,card_cutx,card_cuty,pdeck_x+40,pdeck_y,card_tamx,card_tamy)
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