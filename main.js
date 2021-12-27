var mouseEvent="empty";

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var last_position_x, last_position_y;

color="black";
width_of_line=1;
canvas.addEventListener("mousedown",mymousedown);

function  mymousedown(e){

    mouseEvent="mousedown"
    color=document.getElementById("colour").value;
    width_of_line=document.getElementById("width").value;
    radius=document.getElementById("radius").value;

}

canvas.addEventListener("mouseup",mymouseup);
function  mymouseup(e){

    mouseEvent="mouseup";

}

canvas.addEventListener("mouseleave",mymouseleave);
function  mymouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove",mymousemove);
function  mymousemove(e){

    current_position_x=e.clientX - canvas.offsetLeft;
current_position_y=e.clientY - canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("Last position of X = "+last_position_x+"and last position of y = "+last_position_y);
    ctx.moveTo(last_position_x, last_position_y);
   
    console.log("Current position of X = "+last_position_x+"and current position of y = "+current_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();

}
last_position_x=current_position_x;
last_position_y=current_position_y;

    
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

