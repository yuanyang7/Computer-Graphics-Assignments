/**
 * Responsible for initializing buttons, sliders, radio buttons, etc. present
 * within your HTML document.
 */
var mouseIsDown = false;
function initEventHandelers(gl, canvas) {

    document.getElementById("btn").onclick = function() {clearCanvas(gl)};
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

    g_size = changePointSize(size.value);
    g_colors  = changePointColor();

    x = ((x - rect.left) - canvas.height / 2) / (canvas.height / 2);
    y = (canvas.width / 2 - (y - rect.top)) / (canvas.width / 2);
    sendTextToHTML("x: " + x + " y:" + y, "xy");
    g_points = [x,y];
        
    render(gl, "a_Position", "u_FragColor", "a_PointSize", g_points, g_colors, g_size);
}

/**
 * Renders the scene on the HTML canvas.
 */
function render(gl, a_Position, u_FragColor, a_PointSize, g_points, g_colors, g_size) {
    var a_Position = gl.getAttribLocation(gl.program, a_Position);
    gl.vertexAttrib3f(a_Position, g_points[0], g_points[1], 0,0);
    sendUniformFloatToGLSL(g_size, a_PointSize);
    sendUniformVec4ToGLSL(g_colors, u_FragColor);
    gl.drawArrays(gl.POINTS, 0, 1);
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
    return size;
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
