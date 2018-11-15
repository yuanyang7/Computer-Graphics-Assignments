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

    tick();
    initEventHandelers(gl, canvas);
    clearCanvas(gl);
    scene.addGeometry(new Plane(5.0, 0.0, 0.0, [1.0,1.0,1.0,1.0]));
    scene.addGeometry(new TiltedCube(0.2, 0.0, 0.2, 0.2, [1.0,0.5,0.5,1.0]));
    scene.addGeometry(new TiltedCube(0.2, 1.0, 0.2, 0.3, [0.0,0.8,0.0,1.0]));
    scene.addGeometry(new TiltedCube(0.3, -1.0, 0.3, 0.5, [1.,0.2,0.0,1.0]));
    scene.addGeometry(new TiltedCube(0.3, 0.3, 0.3, 1.0, [1.0,0.6,0.0,1.0]));
    scene.addGeometry(new TiltedCube(0.2, 2.0, 0.2, 2.0, [0.8,0.4,0.0,1.0]));
    scene.addGeometry(new TiltedCube(0.3, -2.0, 0.3, 1.5, [0.8,0.0,0.0,1.0]));
    scene.addGeometry(new MultiTextureCube('external/textures/flcl.jpg',0.2, 0.0, 0.0, [1.0,1.0,1.0,1.0]));
}
