/**
 * Specifies a Square. A subclass of Geometry.
 *
 * @author Yuan Yang
 * @this {Plane}
 */
class Plane extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   */
  constructor(size, centerX, centerY, color) {
    super();
    this.color = color;
    this.generateSquareVertices(size, centerX, centerY);
    // Recommendations: Remember that Square is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
  }

  /**
   * Generates the vertices of the square.
   *
   * @private
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   */
  generateSquareVertices(size, centerX, centerY) {
      var i = 0;
      for(i = 0; i < 6; i++)
        this.vertices.push(new Vector3);

      this.vertices[0].points = new Vector3([centerX + size, 0, centerY + size]);
      this.vertices[1].points = new Vector3([centerX - size, 0, centerY + size]);
      this.vertices[2].points = new Vector3([centerX + size, 0, centerY - size]);

      this.vertices[3].points = new Vector3([centerX - size, 0, centerY + size]);
      this.vertices[4].points = new Vector3([centerX + size, 0, centerY - size]);
      this.vertices[5].points = new Vector3([centerX - size, 0, centerY - size]);
      this.vertices[0].normal = new Vector3([0,0,1]);
      this.vertices[1].normal = new Vector3([0,0,1]);
      this.vertices[2].normal = new Vector3([0,0,1]);
      this.vertices[3].normal = new Vector3([0,0,1]);
      this.vertices[4].normal = new Vector3([0,0,1]);
      this.vertices[5].normal = new Vector3([0,0,1]);
      var i;
      for(i = 0; i < this.vertices.length; i++){
          this.vertices[i].color = this.color;
      }

    // Recommendations: Might want to call this within your Square constructor.
    // Keeps your code clean :)
  }
}
