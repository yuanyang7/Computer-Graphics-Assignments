/**
 * Function called when the webpage loads.
 */
function main() {
    var canvas = document.getElementById('webgl');
    gl = canvas.getContext('webgl', {preserveDrawingBuffer:true} );

    if (!gl) {
            console.log('Failed to Retrieve the <canvas> element');
            return;
    }
    gl.enable(gl.DEPTH_TEST);
    /*
    if (!createShader(gl, ASSIGN4_VSHADER, ASSIGN4_FSHADER)){
            console.log('Failed to initialize shaders.');
            return;
    }
    */
    tick();
    initEventHandelers(gl, canvas);
    clearCanvas(gl);
    scene.addGeometry(new MultiTextureCube('external/textures/flcl.jpg',0.2, 0.0, 0.0, [1.0,1.0,1.0,1.0]));
}
