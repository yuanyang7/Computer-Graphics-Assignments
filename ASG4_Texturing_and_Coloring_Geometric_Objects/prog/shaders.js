
  // Basic Vertex Shader that receives position and size for each vertex (point).
  var ASSIGN4_VSHADER =
  'attribute vec4 a_Position; \n' +
  'attribute vec4 a_FragColor; \n' +

  'uniform mat4 u_ModelMatrix; \n' +
  'varying vec4 v_FragColor; \n' +
  'void main() {\n' +
  '  v_FragColor = a_FragColor;\n' +
  '  gl_Position = u_ModelMatrix * a_Position;\n' +
  '}\n';

  // Basic Fragment Shader that receives a single one color (point).
  var ASSIGN4_FSHADER =
  'precision mediump float; \n' +
  //'uniform vec4 u_FragColor; \n' + //uniform variable
  'varying vec4 v_FragColor; \n' +
  //'attribute vec4 a_Color; \n' +
  'void main() { \n' +
  '       gl_FragColor = v_FragColor; \n' +
  //'       gl_FragColor = vec4(1.0); \n' +
  '}\n';

/*    texture   */
    var ASSIGN4_VSHADER_TEXTURE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'varying vec2 v_TexCoord;\n' +
    'uniform mat4 u_ModelMatrix; \n' +
    'void main() {\n' +
        ' gl_Position = u_ModelMatrix * a_Position;\n' +
        ' v_TexCoord = a_TexCoord;\n' +
    '}\n';
    var ASSIGN4_FSHADER_TEXTURE =
    'precision mediump float; \n' +
    'uniform sampler2D u_Sampler;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    ' gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '}\n';
