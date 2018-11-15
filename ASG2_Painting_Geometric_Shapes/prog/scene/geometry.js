/**
 * Specifies a geometric object.
 *
 * @author Yuan Yang
 * @this {Geometry}
 */
class Geometry {
  /**
   * Constructor for Geometry.
   *
   * @constructor
   */
  constructor() {
    this.vertices = []; // Vertex objects. Each vertex has x-y-z.
    this.color = [];  // The color of your geometric object
  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
    sendUniformVec4ToGLSL(new Float32Array(this.color), "u_FragColor");
    sendAttributeBufferToGLSL(new Float32Array(this.vertices), this.vertices.length / 2, "a_Position");
    tellGLSLToDrawCurrentBuffer(this.vertices.length/ 2);
  }
}
