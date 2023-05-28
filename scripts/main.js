let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

setInterval(fazer = () => {
    ctx.font = '20px Arial'
    ctx.moveTo(0,0)
},50)

let corpo = document.body
let result = document.createElement('p')
result.innerText = 'Teste'
result.style.textAlign = 'center'
result.style.fontSize = '2em'
corpo.appendChild(result)

canvas.addEventListener('mousemove',(event) => {
    let x = event.pageX
    let y = event.pageY
    result.innerText = `x: ${x} y: ${y}`
})