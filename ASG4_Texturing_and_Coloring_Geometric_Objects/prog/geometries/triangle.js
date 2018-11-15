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
  constructor(size, centerX, centerY, color,isRainbow) {
     super();
     this.color = color;
     this.isRainbow = isRainbow;
     this.generateTriangleVertices(size, centerX, centerY);


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
      //console.log(this.color);
      const ROOT3 = 1.732;
      this.vertices.push(new Vertex);
      this.vertices.push(new Vertex);
      this.vertices.push(new Vertex);
      this.vertices[0].points = new Vector3([centerX - ROOT3 * 0.5 * size, centerY + 0.5 * size, 0]);
      this.vertices[1].points = new Vector3([centerX + ROOT3 * 0.5 * size, centerY + 0.5 * size, 0]);
      this.vertices[2].points = new Vector3([centerX, centerY - size, 0]);

      var i;
      for(i = 0; i < this.vertices.length; i++){

          if (document.getElementById("ifRainbow").value == 1){
              this.vertices[i].color = [Math.random(),Math.random(),Math.random(),1];
          }
          else {
              this.vertices[i].color = this.color;
          }
      }
      /*
      this.vertices.push(new Vertex(centerX - ROOT3 * 0.5 * size, centerY + 0.5 * size, 0));
      this.vertices.push(new Vertex(centerX + ROOT3 * 0.5 * size, centerY + 0.5 * size, 0));
      this.vertices.push(new Vertex(centerX, centerY - size, 0));
      */
  }
}
