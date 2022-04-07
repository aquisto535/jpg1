const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("color")

const INITIAL_COLOR ="#2c2c2c"
const CANVAS_SIZE = 700
const range = document.querySelector("input")

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE; 
ctx.strokeStyle = INITIAL_COLOR
ctx.lineWidth = 2.5


let painting = false;

function onMove(event){
    const x = event.offsetX
    const y = event.offsetY
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y)
    } else{
        ctx.lineTo(x, y)
        ctx.stroke();
        
    }
 }

 function onLeave(){
    painting = false
}

function paint(){
    painting = true
    
}

function makeColor(event){
    const color = event.target.style.backgroundColor
    ctx.strokeStyle = color
}


function rangeChange(event){
    const size = event.target.value
    ctx.lineWidth = size;
}


if(range){
    range.addEventListener("input", rangeChange)
}

if(canvas){
    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave" ,onLeave)
    canvas.addEventListener("mousedown", paint)
    canvas.addEventListener("mouseup", onLeave)
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", makeColor))
