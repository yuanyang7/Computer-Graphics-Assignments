/**
 * Specifies a geometric object.
 *
 * @author "Your Name Here"
 * @this {Geometry}
 */
class Geometry {
  /**
   * Constructor for Geometry.
   *
   * @constructor
   */
  constructor() {
    this.vertices    = []; // Vertex objects. Each vertex has x-y-z.
    this.modelMatrix = new Matrix4(); // Model matrix applied to geometric object
    this.normalMatrix = new Matrix4();
    this.shader      = createShader(gl, ASSIGN5_VSHADER, ASSIGN5_FSHADER);
    this.shader_tex  = createShader(gl, ASSIGN5_VSHADER_TEXTURE, ASSIGN5_FSHADER_TEXTURE);
    this.shader_type = "non-texture";
  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
      if (this.shader_type == "non-texture")
        useShader(gl, this.shader);
      else {
        useShader(gl, this.shader_tex);
      }
      var points = [];
      var colors = [];
      var normals = [];
      var uv = [];
      var self = this;
      this.vertices.forEach(
          function(vertex){
              var t = vertex.points.elements;
              var normals_t = vertex.normal.elements;
              points.push(t[0]);
              points.push(t[1]);
              points.push(t[2]);
              normals.push(normals_t[0]);
              normals.push(normals_t[1]);
              normals.push(normals_t[2]);
              //vertex.color = [1, 1, 1, 1];
              if (self.shader_type == "non-texture") {
                colors.push(vertex.color[0], vertex.color[1], vertex.color[2],vertex.color[3]);
                //colors.push(1, 1, 1, 1);
              }
              else if (self.shader_type == "texture"){
                  uv.push(vertex.uv[0]);
                  uv.push(vertex.uv[1]);
              }
          }
      );

      //view
      // Specify the eye point and line of sight
      var viewMatrix = new Matrix4();
      viewMatrix.setLookAt(scene.g_eyeX, scene.g_eyeY, scene.g_eyeZ, scene.g_atX, 1, scene.g_atZ, 0, 1, 0);
      sendUniformMat4ToGLSL(viewMatrix.elements, "u_ViewMatrix");

      var projMatrix = new Matrix4();
      //projMatrix.setOrtho(-1.0, 1.0, -1.0, 1.0, 0.0, 10.0);
      projMatrix.setPerspective(60, 1, 1, 100);
      sendUniformMat4ToGLSL(projMatrix.elements, "u_ProjMatrix");

      sendAttributeBufferToGLSL(new Float32Array(normals), 3, "a_Normal");
      sendUniformMat4ToGLSL(this.normalMatrix.elements, "u_NormalMatrix");
      //sendUniformVec4ToGLSL(new Float32Array(colors), "u_FragColor");
      if (this.shader_type == "non-texture"){
          sendAttributeBufferToGLSL(new Float32Array(points), 3, "a_Position");
          sendAttributeBufferToGLSL(new Float32Array(colors), 4, "a_Color");
          sendUniformMat4ToGLSL(this.modelMatrix.elements, "u_ModelMatrix");
          tellGLSLToDrawCurrentBuffer(this.vertices.length);
      }
      else if (this.shader_type == "texture"){
          sendAttributeBufferToGLSL(new Float32Array(points), 3, "a_Position");
          sendAttributeBufferToGLSL(new Float32Array(uv), 2, "a_TexCoord");
          sendUniformMat4ToGLSL(this.modelMatrix.elements, "u_ModelMatrix");
          send2DTextureToGLSL(this.texture, 0, "u_Sampler");
          tellGLSLToDrawCurrentBuffer(this.vertices.length);
      }
      //if (!gl.getShaderParameter(gl.program, gl.COMPILE_STATUS)) {
      //alert(gl.getShaderInfoLog(gl.program));
      //}

    // Recommendations: sendUniformVec4ToGLSL(), tellGLSLToDrawCurrentBuffer(),
    // and sendAttributeBufferToGLSL() are going to be useful here.
  }

  /**
   * Responsible for updating the geometry's modelMatrix for animation.
   * Does nothing for non-animating geometry.
   */
  updateAnimation() {
    return;

    // NOTE: This is just in place so you'll be able to call updateAnimation()
    // on geometry that don't animate. No need to change anything.
  }
}
