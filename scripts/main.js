let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = 'rgb(255,0,0)'
ctx.arc(50,50,2,0,2*Math.PI,false)
ctx.fill()

ctx.moveTo(80,80)