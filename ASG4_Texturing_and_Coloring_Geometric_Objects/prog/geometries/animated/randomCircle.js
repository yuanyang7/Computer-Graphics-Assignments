/**
 * Specifies a circle which moves randomly.
 *
 * @author "Yuan Yang"
 * @this {RandomCircle}
 */

class RandomCircle extends Circle {

  static get BOUNDARIES_X() {
      return 1;
  }
  static get BOUNDARIES_Y() {
      return 1;
  }
  /**
   * Constructor for RandomCircle.
   *
   * @constructor
   * @param {Number} radius The radius of the random circle being constructed
   * @param {Integer} segements The number of segments composing the circle
   * @param {Number} centerX The x-position of the circle being constructed
   * @param {Number} centerY The y-position of the circle being constructed
   * @returns {RandomCircle} RandomCircle object created
   */
  constructor(radius, segments, centerX, centerY, color,isRainbow) {
    super(radius, segments, centerX, centerY, color);
    this.current_trans_x = 0;
    this.current_trans_y = 0;
    this.current_trans_unit_x = (Math.random() - 0.5) * 0.1;
    this.current_trans_unit_y = (Math.random() - 0.5) * 0.1;
    if(centerX + radius > RandomCircle.BOUNDARIES_X)
        this.centerX = RandomCircle.BOUNDARIES_X - radius;
    else if (centerX - radius < -RandomCircle.BOUNDARIES_X)
        this.centerX = -RandomCircle.BOUNDARIES_X + radius;
    else this.centerX = centerX;
    console.log(centerX)


    if(centerY + radius > RandomCircle.BOUNDARIES_Y)
        this.centerY = RandomCircle.BOUNDARIES_Y - radius;
    else if (centerY - radius < -RandomCircle.BOUNDARIES_Y)
        this.centerY = -RandomCircle.BOUNDARIES_X + radius;
    else this.centerY = centerY;
    this.radius = radius;

    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, a circle is going
    // to need a variable to keep track of the direction the circle is moving.
  }

  /**
   * Updates random circle's animation. Changes modelMatrix into a translation
   * matrix translating into a random direction.
   */
  updateAnimation() {
    while(this.centerX + this.current_trans_x + this.current_trans_unit_x>= RandomCircle.BOUNDARIES_X - this.radius|| this.centerX + this.current_trans_x + this.current_trans_unit_x<= -1 * RandomCircle.BOUNDARIES_X + this.radius)
        this.current_trans_unit_x = (Math.random() - 0.5) * 0.1;
    while(this.centerY + this.current_trans_y + this.current_trans_unit_y>= RandomCircle.BOUNDARIES_Y - this.radius|| this.centerY + this.current_trans_y + this.current_trans_unit_y<= -1 * RandomCircle.BOUNDARIES_Y + this.radius)
        this.current_trans_unit_y = (Math.random() - 0.5) * 0.1;
    this.current_trans_x += this.current_trans_unit_x;
    this.current_trans_y += this.current_trans_unit_y;
    this.modelMatrix.setTranslate(this.current_trans_x, this.current_trans_y, 0);

    // Recomendations: Refer to README.txt for more detalied recommendations
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.
  }

}
