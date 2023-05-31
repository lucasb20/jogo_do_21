let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

const canvas_width = 300,canvas_height = 150

const baralho = document.createElement('img')
baralho.src = 'imagens/baralho_otim.png'

const card_tamx=100,card_tamy=100
const card_cutx=80,card_cuty=124

const pdeck_x=60,pdeck_y=90
const hdeck_x=75,hdeck_y=40

const player_hand = [], house_hand =[]

function build_deck(){
    const deck = []
    for(let i=1;i<=13;i++){
        let aux = []
        let posx = 0 + (i-1)*(card_tamx)
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

    const hearts = ['a',2,3,4,5,6,7,8,9,10,'j','q','k']
    const spades = ['a',2,3,4,5,6,7,8,9,10,'j','q','k']
    const diamonds = ['a',2,3,4,5,6,7,8,9,10,'j','q','k']
    const clubs = ['a',2,3,4,5,6,7,8,9,10,'j','q','k']
    /* const deck = [hearts,spades,diamonds,clubs] */
}



document.body.onload = ()=>{
    ctx.font = '10px Arial'
    ctx.fillText(`Press D for deal 1 more card, H for hold, and N for new game.`,5,10)
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