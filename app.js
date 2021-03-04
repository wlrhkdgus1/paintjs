const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // context는 canvas 안에서 픽셀을 다루는것.

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove); // 캔버스안에서
    canvas.addEventListener("mousedown", startPainting); // 캔버스안에서 클릭시
    canvas.addEventListener("mouseup", stopPainting); // 캔버스안에서 클릭을 해제시
    canvas.addEventListener("mouseleave", stopPainting); // 캔버스 밖으로 나가면
}