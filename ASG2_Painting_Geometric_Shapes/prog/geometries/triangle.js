/**
 * Specifies a Triangle. A subclass of Geometry.
 *
 * @author Yuan Yang
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  constructor(size, centerX, centerY, color) {
     super();
     this.generateTriangleVertices(size, centerX, centerY);
     this.color = color;
  }

  /**
   * Generates the vertices of the Triangle.
   *
   * @private
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  generateTriangleVertices(size, centerX, centerY) {
      const ROOT3 = 1.732;
      this.vertices.push(centerX - ROOT3 * 0.5 * size, centerY + 0.5 * size);
      this.vertices.push(centerX + ROOT3 * 0.5 * size, centerY + 0.5 * size);
      this.vertices.push(centerX, centerY - size);
  }
}
