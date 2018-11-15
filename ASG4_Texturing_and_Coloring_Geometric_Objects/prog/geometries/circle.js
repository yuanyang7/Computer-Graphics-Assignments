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
  constructor(radius, segments, centerX, centerY, color,isRainbow) {
    super();
    this.color = color;
    this.isRainbow = isRainbow;
    this.generateCircleVertices(radius, segments, centerX, centerY);
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
      var cur = 2;
      var i = 0;
      for(i = 0; i < 3; i++)
        this.vertices.push(new Vector3);
      this.vertices[0].points = new Vector3([centerX, centerY, 0]);
      this.vertices[1].points = new Vector3([old_x, old_y, 0]);
      this.vertices[2].points = new Vector3([centerX + Math.cos(ang * (segments - 1)) * radius, centerY + Math.sin(ang * (segments - 1)) * radius, 0]);

      for (i = 1; i < segments; i++){
          var new_x = centerX + Math.cos(ang * i) * radius;
          var new_y = centerY + Math.sin(ang * i) * radius;
          var j = 0;
          for(j = 0; j < 3; j++)
            this.vertices.push(new Vector3);
          this.vertices[++cur].points = new Vector3([centerX, centerY, 0]);
          this.vertices[++cur].points = new Vector3([new_x, new_y, 0]);
          this.vertices[++cur].points = new Vector3([old_x, old_y, 0]);
          old_x = new_x;
          old_y = new_y;
      }
      var i;
      for(i = 0; i < this.vertices.length; i++){

          if (document.getElementById("ifRainbow").value == 1){
              this.vertices[i].color = [Math.random(),Math.random(),Math.random(),1];
          }
          else {
              this.vertices[i].color = this.color;
          }
      }
    // Recommendations: Might want to call this within your Circle constructor.
    // Keeps your code clean :)
  }
}
