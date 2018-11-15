/**
 * Specifies a tilted cube which rotates.
 *
 * @author "Yuan Yang"
 * @this {TiltedCube}
 */
class TiltedCube extends Geometry {
  static get ANGLE_SPEED() {
      return 3;
  }
  /**
   * Constructor for TiltedCube.
   *
   * @constructor
   * @returns {TiltedCube} Geometric object created
   */
  constructor(size, centerX, centerY, color) {
    super();
    this.generateCubeVertices(size, centerX, centerY);
    this.color = color;
    this.current_angle = 0;
    this.centerX = centerX;
    this.centerY = centerY;

    // Recommendations: Might want to tilt your cube at 30 degrees relative to
    // the z-axis here. Pretty good tilt that lets us see that it's a cube.
  }

  /**
   * Generates the vertices of TiltedCube. Just a regular cube.
   *
   * @private
   * @param {Number} size The size of the tilted cube.
   */
  generateCubeVertices(size, centerX, centerY) {
      var i;
      for(i = 0; i < 36; i++)
        this.vertices.push(new Vector3);
      //1
      this.vertices[0].points = new Vector3([centerX + size, centerY + size, size]);
      this.vertices[1].points = new Vector3([centerX + size, centerY + size, -size]);
      this.vertices[2].points = new Vector3([centerX + size, centerY - size, size]);

      this.vertices[3].points = new Vector3([centerX + size, centerY - size, -size]);
      this.vertices[4].points = new Vector3([centerX + size, centerY + size, -size]);
      this.vertices[5].points = new Vector3([centerX + size, centerY - size, size]);

      this.vertices[6].points = new Vector3([centerX - size, centerY + size, size]);
      this.vertices[7].points = new Vector3([centerX - size, centerY + size, -size]);
      this.vertices[8].points = new Vector3([centerX - size, centerY - size, size]);

      this.vertices[9].points = new Vector3([centerX - size, centerY - size, -size]);
      this.vertices[10].points = new Vector3([centerX - size, centerY + size, -size]);
      this.vertices[11].points = new Vector3([centerX - size, centerY - size, size]);

      //2
      this.vertices[12].points = new Vector3([centerX - size, centerY + size, size]);
      this.vertices[13].points = new Vector3([centerX + size, centerY + size, size]);
      this.vertices[14].points = new Vector3([centerX + size, centerY - size, size]);

      this.vertices[15].points = new Vector3([centerX - size, centerY + size, size]);
      this.vertices[16].points = new Vector3([centerX - size, centerY - size, size]);
      this.vertices[17].points = new Vector3([centerX + size, centerY - size, size]);

      this.vertices[18].points = new Vector3([centerX - size, centerY + size, -size]);
      this.vertices[19].points = new Vector3([centerX + size, centerY + size, -size]);
      this.vertices[20].points = new Vector3([centerX + size, centerY - size, -size]);

      this.vertices[21].points = new Vector3([centerX - size, centerY + size, -size]);
      this.vertices[22].points = new Vector3([centerX - size, centerY - size, -size]);
      this.vertices[23].points = new Vector3([centerX + size, centerY - size, -size]);

      //3
      this.vertices[24].points = new Vector3([centerX + size, centerY + size, size]);
      this.vertices[25].points = new Vector3([centerX + size, centerY + size, -size]);
      this.vertices[26].points = new Vector3([centerX - size, centerY + size, size]);

      this.vertices[27].points = new Vector3([centerX - size, centerY + size, -size]);
      this.vertices[28].points = new Vector3([centerX + size, centerY + size, -size]);
      this.vertices[29].points = new Vector3([centerX - size, centerY + size, size]);

      this.vertices[30].points = new Vector3([centerX + size, centerY - size, size]);
      this.vertices[31].points = new Vector3([centerX + size, centerY - size, -size]);
      this.vertices[32].points = new Vector3([centerX - size, centerY - size, size]);

      this.vertices[33].points = new Vector3([centerX - size, centerY - size, -size]);
      this.vertices[34].points = new Vector3([centerX + size, centerY - size, -size]);
      this.vertices[35].points = new Vector3([centerX - size, centerY - size, size]);
    // Recommendations: Might want to generate your cube vertices so that their
    // x-y-z values are combinations of 1.0 and -1.0. Allows you to scale the
    // the cube to your liking better in the future.
  }

  /**
   * Updates the animation of the TiltedCube. Should make it rotate.
   */
  updateAnimation() {
      this.current_angle = (this.current_angle + TiltedCube.ANGLE_SPEED) % 360 * 1.0;
      this.modelMatrix.setTranslate(this.centerX, this.centerY, 0);
      this.modelMatrix.rotate(30, 0, 0, 1);
      this.modelMatrix.rotate(this.current_angle, 1, 1, 1);
      this.modelMatrix.translate(-1 * this.centerX, -1 * this.centerY, 0);

    // Recommendations: While your cube will only need to be at the origin, I'd
    // recommend coding it so it spins in place when placed anywhere on your
    // canvas. Why? Because you might need to have more than one spinning cube
    // in different positions on a future assignment ;)
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.
  }
}
