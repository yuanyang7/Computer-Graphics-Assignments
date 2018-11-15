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

     if (!initShaders(gl, ASSIGN3_VSHADER, ASSIGN3_FSHADER)){
             console.log('Failed to initialize shaders.');
             return;
     }
     tick();
     initEventHandelers(gl, canvas);
     clearCanvas(gl);
 }
