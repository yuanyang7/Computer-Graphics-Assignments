/**
 * Specifies a tilted cube which rotates.
 *
 * @author "Yuan Yang"
 * @this {TiltedCube}
 */
class TiltedCube extends Geometry {
  static get ANGLE_SPEED() {
      return 0.0;
  }
  /**
   * Constructor for TiltedCube.
   *
   * @constructor
   * @returns {TiltedCube} Geometric object created
   */
  constructor(size, centerX, centerY, centerZ, color) {
    super();
    this.color = color;
    this.current_angle = 0;
    this.centerX = centerX;
    this.centerY = centerY;
    this.centerZ = centerZ;
    this.generateCubeVertices(size, centerX, centerY,centerZ);
    // Recommendations: Might want to tilt your cube at 30 degrees relative to
    // the z-axis here. Pretty good tilt that lets us see that it's a cube.
  }

  /**
   * Generates the vertices of TiltedCube. Just a regular cube.
   *
   * @private
   * @param {Number} size The size of the tilted cube.
   */
  generateCubeVertices(size, centerX, centerY, centerZ) {
      var i;
      for(i = 0; i < 36; i++)
        this.vertices.push(new Vector3);
      //1

      this.vertices[0].points = new Vector3([centerX + size, centerY + size, centerZ-size]);
      this.vertices[1].points = new Vector3([centerX + size, centerY - size, centerZ +size]);
      this.vertices[2].points = new Vector3([centerX + size, centerY + size, centerZ+size]);

      this.vertices[3].points = new Vector3([centerX + size, centerY + size, centerZ-size]);
      this.vertices[4].points = new Vector3([centerX + size, centerY - size, centerZ+size]);
      this.vertices[5].points = new Vector3([centerX + size, centerY - size, centerZ-size]);

      this.vertices[0].normal = new Vector3([1,0,0]);
      this.vertices[1].normal = new Vector3([1,0,0]);
      this.vertices[2].normal = new Vector3([1,0,0]);
      this.vertices[3].normal = new Vector3([1,0,0]);
      this.vertices[4].normal = new Vector3([1,0,0]);
      this.vertices[5].normal = new Vector3([1,0,0]);

      this.vertices[6].points = new Vector3([centerX - size, centerY + size, centerZ+size]);
      this.vertices[7].points = new Vector3([centerX - size, centerY + size, centerZ-size]);
      this.vertices[8].points = new Vector3([centerX - size, centerY - size, centerZ+size]);


      this.vertices[9].points = new Vector3([centerX - size, centerY - size, centerZ-size]);
      this.vertices[10].points = new Vector3([centerX - size, centerY + size, centerZ-size]);
      this.vertices[11].points = new Vector3([centerX - size, centerY - size, centerZ+size]);
      this.vertices[6].normal = new Vector3([-1,0,0]);
      this.vertices[7].normal = new Vector3([-1,0,0]);
      this.vertices[8].normal = new Vector3([-1,0,0]);
      this.vertices[9].normal = new Vector3([-1,0,0]);
      this.vertices[10].normal = new Vector3([-1,0,0]);
      this.vertices[11].normal = new Vector3([-1,0,0]);

      //2
      this.vertices[12].points = new Vector3([centerX - size, centerY + size, centerZ+size]);
      this.vertices[13].points = new Vector3([centerX + size, centerY + size, centerZ+size]);
      this.vertices[14].points = new Vector3([centerX + size, centerY - size, centerZ+size]);

      this.vertices[15].points = new Vector3([centerX - size, centerY + size, centerZ+size]);
      this.vertices[16].points = new Vector3([centerX - size, centerY - size, centerZ+size]);
      this.vertices[17].points = new Vector3([centerX + size, centerY - size, centerZ+size]);
      this.vertices[12].normal = new Vector3([0,0,1]);
      this.vertices[13].normal = new Vector3([0,0,1]);
      this.vertices[14].normal = new Vector3([0,0,1]);
      this.vertices[15].normal = new Vector3([0,0,1]);
      this.vertices[16].normal = new Vector3([0,0,1]);
      this.vertices[17].normal = new Vector3([0,0,1]);


      this.vertices[18].points = new Vector3([centerX - size, centerY + size, centerZ-size]);
      this.vertices[19].points = new Vector3([centerX + size, centerY + size, centerZ-size]);
      this.vertices[20].points = new Vector3([centerX + size, centerY - size, centerZ-size]);

      this.vertices[21].points = new Vector3([centerX - size, centerY + size, centerZ-size]);
      this.vertices[22].points = new Vector3([centerX - size, centerY - size, centerZ-size]);
      this.vertices[23].points = new Vector3([centerX + size, centerY - size, centerZ-size]);
      this.vertices[18].normal = new Vector3([0,0,-1]);
      this.vertices[19].normal = new Vector3([0,0,-1]);
      this.vertices[20].normal = new Vector3([0,0,-1]);
      this.vertices[21].normal = new Vector3([0,0,-1]);
      this.vertices[22].normal = new Vector3([0,0,-1]);
      this.vertices[23].normal = new Vector3([0,0,-1]);
      //3
      this.vertices[24].points = new Vector3([centerX + size, centerY + size, centerZ+size]);
      this.vertices[25].points = new Vector3([centerX + size, centerY + size, centerZ-size]);
      this.vertices[26].points = new Vector3([centerX - size, centerY + size, centerZ+size]);

      this.vertices[27].points = new Vector3([centerX - size, centerY + size, centerZ-size]);
      this.vertices[28].points = new Vector3([centerX + size, centerY + size, centerZ-size]);
      this.vertices[29].points = new Vector3([centerX - size, centerY + size, centerZ+size]);
      this.vertices[24].normal = new Vector3([0,1,0]);
      this.vertices[25].normal = new Vector3([0,1,0]);
      this.vertices[26].normal = new Vector3([0,1,0]);
      this.vertices[27].normal = new Vector3([0,1,0]);
      this.vertices[28].normal = new Vector3([0,1,0]);
      this.vertices[29].normal = new Vector3([0,1,0]);

      this.vertices[30].points = new Vector3([centerX + size, centerY - size, centerZ+size]);
      this.vertices[31].points = new Vector3([centerX + size, centerY - size, centerZ-size]);
      this.vertices[32].points = new Vector3([centerX - size, centerY - size, centerZ+size]);

      this.vertices[33].points = new Vector3([centerX - size, centerY - size, centerZ-size]);
      this.vertices[34].points = new Vector3([centerX + size, centerY - size, centerZ-size]);
      this.vertices[35].points = new Vector3([centerX - size, centerY - size, centerZ+size]);

      this.vertices[30].normal = new Vector3([0,-1,0]);
      this.vertices[31].normal = new Vector3([0,-1,0]);
      this.vertices[32].normal = new Vector3([0,-1,0]);
      this.vertices[33].normal = new Vector3([0,-1,0]);
      this.vertices[34].normal = new Vector3([0,-1,0]);
      this.vertices[35].normal = new Vector3([0,-1,0]);



      if(this.shader_type == "non-texture"){
          for(i = 0; i < 36; i++) {
              this.vertices[i].color = this.color;
          }
          console.log(this.vertices);
      }
      else{
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
          this.vertices[8].uv = [1.0, 0.0];
          this.vertices[9].uv = [0.0, 0.0];
          this.vertices[10].uv = [0.0, 1.0];
          this.vertices[11].uv = [1.0, 0.0];

          // bottom half
          this.vertices[12].uv = [1.0, 1.0];
          this.vertices[13].uv = [0.0, 1.0];
          this.vertices[14].uv = [0.0, 0.0];
          this.vertices[15].uv = [1.0, 1.0];
          this.vertices[16].uv = [1.0, 0.0];
          this.vertices[17].uv = [0.0, 0.0];

          // twice
          this.vertices[18].uv = [1.0, 1.0];
          this.vertices[19].uv = [0.0, 1.0];
          this.vertices[20].uv = [0.0, 0.0];
          this.vertices[21].uv = [1.0, 1.0];
          this.vertices[22].uv = [1.0, 0.0];
          this.vertices[23].uv = [0.0, 0.0];

          // 9
          this.vertices[24].uv = [0.0, 0.0];
          this.vertices[25].uv = [0.0, 1.0];
          this.vertices[26].uv = [1.0, 0.0];
          this.vertices[27].uv = [1.0, 1.0];
          this.vertices[28].uv = [0.0, 1.0];
          this.vertices[29].uv = [1.0, 0.0];

          //
          this.vertices[30].uv = [0.0, 0.0];
          this.vertices[31].uv = [0.0, 1.0];
          this.vertices[32].uv = [1.0, 0.0];
          this.vertices[33].uv = [1.0, 1.0];
          this.vertices[34].uv = [0.0, 1.0];
          this.vertices[35].uv = [1.0, 0.0];
      }
    // Recommendations: Might want to generate your cube vertices so that their
    // x-y-z values are combinations of 1.0 and -1.0. Allows you to scale the
    // the cube to your liking better in the future.
  }

  /**
   * Updates the animation of the TiltedCube. Should make it rotate.
   */
   updateAnimation() {
     this.modelMatrix.setTranslate(this.centerX, this.centerY, this.centerZ);
     this.modelMatrix.rotate(45, 0, 1, 0);
     this.modelMatrix.translate(-1 * this.centerX, -1 * this.centerY, -1 * this.centerZ);

     this.normalMatrix.setInverseOf(this.modelMatrix);
     this.normalMatrix.transpose();
     // Recomendations: Do not simply apply a rotation matrix. Doing so will
     // cause your square to spin in a circle on screen.
     //

   }
}
