// Basic Vertex Shader that receives position and size for each vertex (point).
var ASSIGN3_VSHADER =
'attribute vec4 a_Position; \n' +
'uniform mat4 u_ModelMatrix; \n' +
'void main() {\n' +
' gl_Position = u_ModelMatrix * a_Position;\n' +
'}\n';

// Basic Fragment Shader that receives a single one color (point).
var ASSIGN3_FSHADER =
'precision mediump float; \n' +
'uniform vec4 u_FragColor; \n' + //uniform variable
'void main() { \n' +
'       gl_FragColor = u_FragColor; \n' +
'}\n';
