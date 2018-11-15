
  // Basic Vertex Shader that receives position and size for each vertex (point).
  var ASSIGN5_VSHADER =
  'attribute vec4 a_Position; \n' +
  'attribute vec4 a_Color; \n' +
  'attribute vec4 a_Normal;\n' +
  'uniform mat4 u_ViewMatrix;\n' +
  'uniform mat4 u_ProjMatrix;\n' +
  'uniform mat4 u_ModelMatrix; \n' +
  'uniform mat4 u_NormalMatrix;\n'+
  'varying vec4 v_Normal; \n' +
  'varying vec4 v_Color; \n' +
  'varying vec4 v_Position; \n' +
  'void main() {\n' +
  '  v_Normal = u_NormalMatrix * a_Normal; \n' +
  '  v_Color = a_Color; \n' +
  '  v_Position = u_ModelMatrix * a_Position; \n' +
  '  gl_Position = u_ProjMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;\n' +
  '}\n';

  // Basic Fragment Shader that receives a single one color (point).
  var ASSIGN5_FSHADER =
  'precision mediump float; \n' +
  'varying vec4 v_Normal; \n' +
  'varying vec4 v_Color; \n' +
  'varying vec4 v_Position; \n' +
  'void main() { \n' +
  '  vec3 l = normalize(vec3(3,3, -3) - vec3(v_Position));\n' +
  '  vec3 n = normalize(vec3(v_Normal));\n' +
  '  gl_FragColor = vec4(0.3, 0.3, 0.3, 1.0) * v_Color' +
  ' + vec4(1,1,1,1) * vec4(vec3(v_Color) * max(dot(n, l), 0.0), 1.0);\n' +
  '}\n';

/*    texture   */
    var ASSIGN5_VSHADER_TEXTURE =
    'attribute vec4 a_Position;\n' +
    'attribute vec2 a_TexCoord;\n' +
    'varying vec2 v_TexCoord;\n' +
    'uniform mat4 u_ViewMatrix;\n' +
    'uniform mat4 u_ProjMatrix;\n' +
    'uniform mat4 u_ModelMatrix; \n' +
    'void main() {\n' +
        ' gl_Position = u_ProjMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;\n' +
        ' v_TexCoord = a_TexCoord;\n' +
    '}\n';
    var ASSIGN5_FSHADER_TEXTURE =
    'precision mediump float; \n' +
    'uniform sampler2D u_Sampler;\n' +
    'varying vec2 v_TexCoord;\n' +
    'void main() {\n' +
    ' gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
    '}\n';
