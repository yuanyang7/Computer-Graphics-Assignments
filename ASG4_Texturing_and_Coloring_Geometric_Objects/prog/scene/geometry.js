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
    this.shader      = createShader(gl, ASSIGN4_VSHADER, ASSIGN4_FSHADER);
    this.shader_tex  = createShader(gl, ASSIGN4_VSHADER_TEXTURE, ASSIGN4_FSHADER_TEXTURE);
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
      var uv = [];
      var self = this;
      this.vertices.forEach(
          function(vertex){
              var t = vertex.points.elements;
              points.push(t[0]);
              points.push(t[1]);
              points.push(t[2]);
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

      //sendUniformVec4ToGLSL(new Float32Array(colors), "u_FragColor");
      if (this.shader_type == "non-texture"){
          sendAttributeBufferToGLSL(new Float32Array(points), 3, "a_Position");
          sendAttributeBufferToGLSL(new Float32Array(colors), 4, "a_FragColor");
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
