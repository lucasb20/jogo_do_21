const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 500

const res_posx=550,res_posy=100
const txt_posx=100,txt_posy=20

const baralho = document.createElement('img')
baralho.src = 'imagens/baralho_otim.png'

const card_tamx=80,card_tamy=120
const card_cutx=79,card_cuty=123

const hdeck_x=360,hdeck_y=50

const house_hand =[]

let count_player = -1

const pdeck_y=300
const p1deck_x = 30, p2deck_x=230, p3deck_x=430, p4deck_x=630
const player1_hand = [], player2_hand = [], player3_hand = [], player4_hand = []
const all_posx = [p1deck_x,p2deck_x,p3deck_x,p4deck_x]
const all_hands = [player1_hand,player2_hand,player3_hand,player4_hand]

const deck = []

const card_back = [0,0,card_cutx*2,card_cuty*4]

let turn = -1
let state_hold = -1

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
    ctx.clearRect(0,0,canvas.width,canvas.height)

    if(state_hold!=count_player){
        ctx.fillText(`Player ${turn+1}'s turn.`,100,100)
    }

    for(let i=0;i<count_player;i++){
        for(let j=0;j<all_hands[i].length;j++){
            draw_card(all_hands[i][j],all_posx[i]+20*j,pdeck_y)
        }
    }

    if(state_hold!=count_player){
        for(let i=0;i<house_hand.length;i++){
            if(i==0){
                draw_card(house_hand[i],hdeck_x+20*i,hdeck_y)
            }
            else{
                draw_card(card_back,hdeck_x+20*i,hdeck_y)
            }
        }
    }
    else{
        for(let i=0;i<house_hand.length;i++){
            draw_card(house_hand[i],hdeck_x+20*i,hdeck_y)
        }
    }

    ctx.font = '20px Arial'
    ctx.fillText(`Press D for deal 1 more card, H for hold, and N for new game.`,txt_posx,txt_posy)

    if(state_hold==count_player){
        if(check_winner()==1){
            ctx.fillText('Player1 wins.',res_posx,res_posy)
        }
        else if(check_winner()==2){
            ctx.fillText('Player2 wins.',res_posx,res_posy)
        }
        else if(check_winner()==3){
            ctx.fillText('Player3 wins.',res_posx,res_posy)
        }
        else if(check_winner()==4){
            ctx.fillText('Player1 wins.',res_posx,res_posy)
        }
        else if(check_winner()==-1){
            ctx.fillText('House wins.',res_posx,res_posy)
        }
        else{
            ctx.fillText('Draw.',res_posx,res_posy)
        }
    }
}

function draw_card(card,x,y){
    ctx.drawImage(baralho,card[2],card[3],card_cutx,card_cuty,x,y,card_tamx,card_tamy)
}

baralho.addEventListener('load',init)

function init(){
    ctx.font = '20px Arial'
    ctx.fillText(`Press D for deal 1 more card, H for hold, and N for new game.`,txt_posx,txt_posy)
}

window.addEventListener('keydown',(event) => {
    switch(event.key){
        case 'd':
            deal(deck,all_hands[turn])
            break
        case 'h':
            hold()
            turn++
            update()
            break
        case 'n':
            turn=-1
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
    state_hold++
}

function new_game(){
    do{
        count_player = Number(window.prompt('Digite a quantidade de players. (Entre 1 e 4)'))
    }while(!(count_player>0 && count_player<5))

    turn = 0
    deck.length = 0

    player1_hand.length = 0
    player2_hand.length = 0
    player3_hand.length = 0
    player4_hand.length = 0
    house_hand.length = 0
    state_hold = 0
    build_deck(deck)
    shuffle(deck)

    for(let i=0;i<count_player;i++){
        deal(deck,all_hands[i])
        deal(deck,all_hands[i])
    }

    deal(deck,house_hand)
    deal(deck,house_hand)

    update()
}

function check_winner(){
    let house_points = calc_hand(house_hand)
    let player_points = []
    let player_exp = []

    let aux=0
    for(let i=0;i<count_player;i++){
        aux = calc_hand(all_hands[i])
        player_points.push(aux)
        player_exp[i] = (aux > 21)?true:false
    }

    let house_exp = (house_points > 21)?true:false;

    for(let i=0;i<count_player;i++){
        if((player_points[i]>house_points && player_points[i]<=21)||(!player_exp[i] && house_exp)){
            return (i+1)
        }    
    }

    if((house_points>player_points && house_points<=21)||(player_exp && !house_exp)){
        return -1
    }
    else{
        return 0
    }
}

function calc_hand(hand){
    let result=0
    let count_a=0
    for(let i=0;i<hand.length;i++){
        switch(hand[i][1]){
            case 'j':
                result+=10
                break
            case 'k':
                result+=10
                break
            case 'q':
                result+=10
                break
            case 'a':
                count_a++
                break
            default:
                result+=hand[i][1]
                break
        }
    }

    if(count_a*11+result>21){
            result+=1*count_a
        }
    else{
        result+=11*count_a
    }

    return result
}