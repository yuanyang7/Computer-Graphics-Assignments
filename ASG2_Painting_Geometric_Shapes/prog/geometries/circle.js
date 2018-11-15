/**
 * Specifies a Circle. A subclass of Geometry.
 *
 * @author Yuan Yang
 * @this {Circle}
 */
class Circle extends Geometry {
  /**
   * Constructor for Circle.
   *
   * @constructor
   * @param {Number} radius The radius of the circle being constructed
   * @param {Integer} segments The number of segments composing the circle
   * @param {Number} centerX The central x-position of the circle
   * @param {Number} centerY The central y-position of the circle
   */
  constructor(radius, segments, centerX, centerY, color) {
    super();
    this.generateCircleVertices(radius, segments, centerX, centerY);
    this.color = color;
    // Recommendations: Remember that Circle is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
  }

  /**
   * Generates the vertices of the Circle.
   *
   * @private
   * @param {Number} radius The radius of the circle being constructed
   * @param {Integer} segments The number of segments composing the circle
   * @param {Number} centerX The central x-position of the circle
   * @param {Number} centerY The central y-position of the circle
   */
  generateCircleVertices(radius, segments, centerX, centerY) {
      const PI = 3.1415926;
      var ang = 2 * PI / segments;
      var vertices = new Float32Array();
      var old_x = centerX + radius, old_y = centerY;
      this.vertices.push(centerX, centerY);
      this.vertices.push(old_x, old_y);
      this.vertices.push(centerX + Math.cos(ang * (segments - 1)) * radius, centerY + Math.sin(ang * (segments - 1)) * radius);
      var i = 0;
      for (i = 1; i < segments; i++){
          var new_x = centerX + Math.cos(ang * i) * radius;
          var new_y = centerY + Math.sin(ang * i) * radius;
          this.vertices.push(centerX, centerY);
          this.vertices.push(new_x, new_y);
          this.vertices.push(old_x, old_y);
          old_x = new_x;
          old_y = new_y;
      }

    // Recommendations: Might want to call this within your Circle constructor.
    // Keeps your code clean :)
  }
}
