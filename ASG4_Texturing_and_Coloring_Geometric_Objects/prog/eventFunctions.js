/**
 * Responsible for initializing buttons, sliders, radio buttons, etc. present
 * within your HTML document.
 */
var mouseIsDown = false;
var objectType = 0;
var scene = new Scene();
//0:triangle
//1:squaure
//2:circle

var preview = document.querySelector('img');
var texture_path = [];
var loadTexture = function(file) {
   var input = file.target;
   var reader = new FileReader();
   reader.onload = function(){
     var dataURL = reader.result;
     var output = document.getElementById('output');
     output.src = dataURL;
     console.log(output);
   };
   //reader.readAsDataURL(input.files[0]);
 };
function initEventHandelers(gl, canvas) {
    document.getElementById("btn").onclick = function() {scene.clearGeometry()};
    document.getElementById("squares").onclick = function() {objectType = 1};
    document.getElementById("triangles").onclick = function() {objectType = 0};
    document.getElementById("circles").onclick = function() {objectType = 2};
    document.getElementById("cubes").onclick = function() {objectType = 3};
    document.getElementById("obj_render").onclick = function() {
        var fileToLoad = document.getElementById('obj_select').files[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent){
            var textFromFileLoaded = fileLoadedEvent.target.result;
            scene.addGeometry(new LoadedOBJ(textFromFileLoaded));
        };
        fileReader.readAsText(fileToLoad, "UTF-8");
    };
    //document.getElementById('texture_select').files[0];
    document.getElementById("ifRainbow").onclick = function() {
            if (document.getElementById("ifRainbow").value == 0){
                sendTextToHTML("rainbow","ifRainbow");
                document.getElementById("ifRainbow").value = 1;
            }
            else{
                sendTextToHTML("solid color","ifRainbow");
                document.getElementById("ifRainbow").value = 0;
            }
    };
    canvas.onmousedown = function(ev) {
        click(ev, gl, canvas);
    }
    canvas.onmousemove = function(ev) {
        if (mouseIsDown != false)
            click(ev, gl, canvas);
    }
    canvas.onmouseup = function(e){
        mouseIsDown = false;
    }
}
/**
 * Function called upon mouse click or mouse drag. Computes position of cursor,
 * pushes cursor position as GLSL coordinates, and draws.
 *
 * @param {Object} ev The event object containing the mouse's canvas position
 */
function click(ev, gl, canvas) {
    mouseIsDown = true;
    var x = ev.clientX;
    var y = ev.clientY;
    var rect = ev.target.getBoundingClientRect();

    g_size = changePointSize();
    g_segments = changeSegCount()
    g_colors  = changePointColor();

    x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2);
    y = (canvas.width / 2 - (y - rect.top)) / (canvas.width / 2);
    sendTextToHTML("x: " + x + " y:" + y, "xy");

    if(objectType == 0){
        scene.addGeometry(new FluctuatingTriangle(g_size, x, y, g_colors, document.getElementById("ifRainbow").value));
    }
    else if(objectType == 1)
        scene.addGeometry(new SpinningSquare(g_size, x, y, g_colors));
    else if(objectType == 2)
        scene.addGeometry(new RandomCircle(g_size, g_segments, x, y, g_colors));
    else if(objectType == 3)
        scene.addGeometry(new TiltedCube(g_size, x, y, g_colors));
    else
        console.log("Object Type Error");

    scene.updateAnimation();
    scene.render();
    //render(gl, "a_Position", "u_FragColor", "a_PointSize", g_points, g_colors, g_size, n);
}

function initVertexBuffers(gl){
var vertices = new Float32Array([ 0.0, 0.5, -0.5, -0.5, 0.5, -0.5
]);
var n = 3; // The number of vertices ...
return n;
}
/**
 * Renders the scene on the HTML canvas.
 */
function render(gl, a_Position, u_FragColor, a_PointSize, g_points, g_colors, g_size, n) {
    var a_Position = gl.getAttribLocation(gl.program, a_Position);
    gl.vertexAttrib3f(a_Position, g_points[0], g_points[1], 0,0);
    //sendUniformFloatToGLSL(g_size, a_PointSize);
    sendUniformVec4ToGLSL(g_colors, u_FragColor);
    gl.drawArrays(gl.TRIANGLES, 0, n);
    //gl.drawArrays(gl.POINTS, 0, 1);
}

/**
 * Clears the HTML canvas.
 */
function clearCanvas(gl) {
    gl.clearColor(0, 0, 0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

/**
 * Changes the size of the points drawn on HTML canvas.
 *
 * @param {float} size Real value representing the size of the point.
 */
function changePointSize() {
    var size = document.getElementById("size").value;
    return size * 1.0;
}

function changeSegCount() {
    var segment = document.getElementById("segment").value;
    return segment;
}
/**
 * Changes the color of the points drawn on HTML canvas.
 *
 * @param {float} color Color value from 0.0 to 1.0.
 */
function changePointColor(color) {
    var red = document.getElementById("red");
    var green = document.getElementById("green");
    var blue = document.getElementById("blue");
    color = [red.value, green.value, blue.value, 1.0];
    return color;
}
