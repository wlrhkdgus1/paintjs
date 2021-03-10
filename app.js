const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // context는 canvas 안에서 픽셀을 다루는것.
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        //console.log("creating path in", x, y);
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        //console.log("creating line in", x, y);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling === true){
        filling = false; 
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(){
     if(filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    }
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove); // 캔버스안에서
    canvas.addEventListener("mousedown", startPainting); // 캔버스안에서 클릭시
    canvas.addEventListener("mouseup", stopPainting); // 캔버스안에서 클릭을 해제시
    canvas.addEventListener("mouseleave", stopPainting); // 캔버스 밖으로 나가면
    canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick));

if(range){
    range.addEventListener("input",handleRangeChange);
}    

if(mode){
    mode.addEventListener("click", handleModeClick);
}