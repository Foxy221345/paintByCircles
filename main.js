canvas=document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

var mouse_event="";
var last_position_x,last_position_y;

var color;
var lineWidth;
var radius;

document.getElementById('btnclear').addEventListener('click', function() {
 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color=(document.getElementById("txtcolor").value == '') ? "red" : document.getElementById("txtcolor").value;
    radius=(document.getElementById("txtradius").value == '') ? 25 : document.getElementById("txtradius").value;
    lineWidth=(document.getElementById("txtLine_Width").value == '') ? 5 : document.getElementById("txtLine_Width");

    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}


canvas.addEventListener("mouseup", my_mouseup);

canvas.addEventListener( "mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown")
    {

        console.log("Last position of x and y coordinates=");
        console.log(" x = "+last_position_x+"y="+last_position_y);
        ctx.moveTo(last_position_x, last_position_y )
        
        console.log("Current position of x and y coordinates=");
        console.log(" x = "+current_position_of_mouse_x+",y="+current_position_of_mouse_y+",radius="+radius);

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke()
    
    }

    last_position_x= current_position_of_mouse_x;
    last_position_y= current_position_of_mouse_y;

}


