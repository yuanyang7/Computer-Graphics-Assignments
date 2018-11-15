/**
 * Specifies a geometric object.
 *
 * @author "Yuan Yang"
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
    this.modelMatrix = new Matrix4(); // Model matrix applied to geometric object
  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
      var points = [];
      this.vertices.forEach(
          function(vertex){
              var t = vertex.points.elements;
              console.log(t);
              points.push(t[0]);
              points.push(t[1]);
              points.push(t[2]);
          }
      );
      console.log(points);
      sendUniformMat4ToGLSL(this.modelMatrix.elements, "u_ModelMatrix");
      sendUniformVec4ToGLSL(new Float32Array(this.color), "u_FragColor");
      sendAttributeBufferToGLSL(new Float32Array(points), 3, "a_Position");
      tellGLSLToDrawCurrentBuffer(this.vertices.length);

    // YOUR CODE HERE
    //

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
