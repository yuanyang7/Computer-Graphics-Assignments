/**
 * A cube with a single textured applied in multiple different ways. A subclass
 * of TiltedCube.
 *
 * @author "Your Name Here"
 * @this {MultiTextureCube}
 */
class MultiTextureCube extends TiltedCube {
  /**
   * Constructor for MultiTextureCube
   *
   * @constructor
   * @param {String} texturePath The filepath/URL of the image used as a texture
   */
  constructor(texturePath,size, centerX, centerY, color) {
    super(size, centerX, centerY, color);
    this.shader_type = "texture";
    this.generateUVCoordinates();
    create2DTexture(texturePath, gl.LINEAR, gl.LINEAR, gl.REPEAT, gl.REPEAT, this);
    // Recomendations: Might want to call generateUVCoordinates here.
  }

  /**
   * Generates the texture coordinates of CheckerCube.
   *
   * @private
   */
  generateUVCoordinates() {
      //whole
      this.vertices[0].uv = [0.0, 1.0];
      this.vertices[1].uv = [1.0, 0.0];
      this.vertices[2].uv = [0.0, 0.0];
      this.vertices[3].uv = [0.0, 1.0];
      this.vertices[4].uv = [1.0, 0.0];
      this.vertices[5].uv = [1.0, 1.0];

      //top half
      this.vertices[6].uv = [1.0, 1.0];
      this.vertices[7].uv = [0.0, 1.0];
      this.vertices[8].uv = [1.0, 0.5];
      this.vertices[9].uv = [0.0, 0.5];
      this.vertices[10].uv = [0.0, 1.0];
      this.vertices[11].uv = [1.0, 0.5];

      // bottom half
      this.vertices[12].uv = [1.0, 0.5];
      this.vertices[13].uv = [0.0, 0.5];
      this.vertices[14].uv = [0.0, 0.0];
      this.vertices[15].uv = [1.0, 0.5];
      this.vertices[16].uv = [1.0, 0.0];
      this.vertices[17].uv = [0.0, 0.0];

      // twice
      this.vertices[18].uv = [2.0, 1.0];
      this.vertices[19].uv = [0.0, 1.0];
      this.vertices[20].uv = [0.0, 0.0];
      this.vertices[21].uv = [2.0, 1.0];
      this.vertices[22].uv = [2.0, 0.0];
      this.vertices[23].uv = [0.0, 0.0];

      // 9
      this.vertices[24].uv = [0.0, 0.0];
      this.vertices[25].uv = [0.0, 3.0];
      this.vertices[26].uv = [3.0, 0.0];
      this.vertices[27].uv = [3.0, 3.0];
      this.vertices[28].uv = [0.0, 3.0];
      this.vertices[29].uv = [3.0, 0.0];

      //
      this.vertices[30].uv = [0.0, 0.0];
      this.vertices[31].uv = [0.0, 3.0];
      this.vertices[32].uv = [3.0, 0.0];
      this.vertices[33].uv = [3.0, 3.0];
      this.vertices[34].uv = [0.0, 3.0];
      this.vertices[35].uv = [3.0, 0.0];
    // Recomendations: Remember uv coordinates are defined from 0.0 to 1.0.
  }

  /**
   * Renders MultiTextureCube.
   */
  render() {
    useShader(gl, this.shader_tex);
    var points = [];
    var uv = [];
    this.vertices.forEach(
        function(vertex){
            var t = vertex.points.elements;

            points.push(t[0]);
            points.push(t[1]);
            points.push(t[2]);
            uv.push(vertex.uv[0]);
            uv.push(vertex.uv[1]);
        }
    );
    sendAttributeBufferToGLSL(new Float32Array(points), 3, "a_Position");
    sendAttributeBufferToGLSL(new Float32Array(uv), 2, "a_TexCoord");
    sendUniformMat4ToGLSL(this.modelMatrix.elements, "u_ModelMatrix");
    send2DTextureToGLSL(this.texture, 0, "u_Sampler");
    tellGLSLToDrawCurrentBuffer(this.vertices.length);

    // Recomendations: This will be the first time render will need to be
    // overloaded. Why? Because this is a textured geometry, not a geometry
    // which relies on a color value. Might want to use
  }

}
