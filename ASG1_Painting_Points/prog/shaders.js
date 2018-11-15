// Basic Vertex Shader that receives position and size for each vertex (point).
var ASSIGN1_VSHADER =
    'attribute vec4 a_Position; \n' +
    'precision mediump float; \n' +
    'uniform float a_PointSize; \n' +
    'void main() {\n' +
    '       gl_Position = a_Position; \n' +
    '       gl_PointSize = a_PointSize; \n' +
    '} \n';

// Basic Fragment Shader that receives a single one color (point).
var ASSIGN1_FSHADER =
    'precision mediump float; \n' +
    'uniform vec4 u_FragColor; \n' + //uniform variable
    'void main() { \n' +
    '       gl_FragColor = u_FragColor; \n' +
    '}\n';
