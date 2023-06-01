let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

const canvas_width = 300,canvas_height = 150

const baralho = document.createElement('img')
baralho.src = 'imagens/baralho_otim.png'

const card_tamx=45,card_tamy=60
const card_cutx=79,card_cuty=123

const pdeck_x=60,pdeck_y=80
const hdeck_x=160,hdeck_y=15

const player_hand = [], house_hand =[]

const deck = []

const card_back = [0,0,card_cutx*2,card_cuty*4]
let state_hold = false

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

function shuffle(deck){
    let k,j,aux
    for(let i=0;i<52;i++){
        k = Math.floor(Math.random()*52)
        j = Math.floor(Math.random()*52)

        aux = deck[k]
        deck[k] = deck[j]
        deck[j] = aux
    }
}

function update(){
    ctx.clearRect(0,0,canvas_width,canvas_height)

    for(let i=0;i<player_hand.length;i++){
        draw_card(player_hand[i],pdeck_x+15*i,pdeck_y)
    }

    if(!state_hold){
        for(let i=0;i<house_hand.length;i++){
            if(i==0){
                draw_card(house_hand[i],hdeck_x+15*i,hdeck_y)
            }
            else{
                draw_card(card_back,hdeck_x+15*i,hdeck_y)
            }
        }
    }
    else{
        for(let i=0;i<house_hand.length;i++){
            draw_card(house_hand[i],hdeck_x+15*i,hdeck_y)
        }
    }

    check_winner()

    ctx.font = '10px Arial'
    ctx.fillText(`Press D for deal 1 more card, H for hold, and N for new game.`,5,10)
}

function draw_card(card,x,y){
    ctx.drawImage(baralho,card[2],card[3],card_cutx,card_cuty,x,y,card_tamx,card_tamy)
}

baralho.addEventListener('load',init)

function init(){
    ctx.font = '10px Arial'
    ctx.fillText(`Press D for deal 1 more card, H for hold, and N for new game.`,5,10)
}

window.addEventListener('keydown',(event) => {
    switch(event.key){
        case 'd':
            deal(deck,player_hand)
            break
        case 'h':
            hold()
            break
        case 'n':
            new_game()
            break
    }
})

function deal(deck,hand){
    hand.push(deck[0])
    deck.shift()
    update()
}

function hold(){
    state_hold = true
    update()
}

function new_game(){
    deck.length = 0
    player_hand.length = 0
    house_hand.length = 0
    state_hold = false
    build_deck(deck)
    shuffle(deck)
    deal(deck,player_hand)
    deal(deck,player_hand)
    deal(deck,house_hand)
    deal(deck,house_hand)

    update()
}

function check_winner(){
    
}