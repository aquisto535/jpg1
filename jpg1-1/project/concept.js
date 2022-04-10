const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("color")
const mode = document.querySelector(".Filling")
const INITIAL_COLOR ="#2c2c2c"
const CANVAS_SIZE = 700
const range = document.querySelector("input")
const saveBtn = document.querySelector(".Saving")

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE; 
ctx.strokeStyle = INITIAL_COLOR
ctx.lineWidth = 2.5
ctx.fillStyle = INITIAL_COLOR;


let painting = false;
let filing = false

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
    ctx.fillStyle = color;
}


function rangeChange(event){
    const size = event.target.value
    ctx.lineWidth = size;
}

function handleMode(){
   if(filing === true){
    filing = false
    mode.innerText = "Fill"
} else{
    filing = true
    mode.innerText = "Paint"
    ctx.fillStyle = ctx.strokeStyle
}
}

function handleCanvasClick(){
    if(filing){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    }
}

function prevaneting(event){
    event.preventDefault()
    
}

function handleSaveClick(){
    const image = canvas.toDataURL()
    const link = document.createElement("a")
    link.href = image
    link.download = "PaintJS[🎨]";
    link.click();
}


if(range){
    range.addEventListener("input", rangeChange)
}

if(canvas){
    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave" ,onLeave)
    canvas.addEventListener("mousedown", paint)
    canvas.addEventListener("mouseup", onLeave)
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", prevaneting)
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", makeColor))

mode.addEventListener("click", handleMode)
    

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
  }
