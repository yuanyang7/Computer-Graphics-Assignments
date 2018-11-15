/**
 * Specifies a triangle which fluctuates in size (grows and shrinks).
 *
 * @author "Yuan Yang"
 * @this {FluctuatingTriangle}
 */
class FluctuatingTriangle extends Triangle {
  /**
   * Constructor for FluctuatingTriangle.
   *
   * @constructor
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  constructor(size, centerX, centerY, color) {
     super(size, centerX, centerY, color);
     this.centerX = centerX;
     this.centerY = centerY;
     this.current_scale = 1.0;
     this.scale_up = 1;


    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, to what amount your
    // triangle is currently scaled at.
  }

  /**
   * Updates the animation for FluctuatingTriangle. Grows and shrinks the
   * triangle in size.
   */
  updateAnimation() {
    if(this.scale_up == 1 && this.current_scale >= 1.5) this.scale_up = 0;
    else if(this.scale_up == 0 && this.current_scale <= 0.5) this.scale_up = 1;
    this.scale_up == 1 ? this.current_scale += 0.1 : this.current_scale -= 0.1;
    this.modelMatrix.setTranslate(this.centerX, this.centerY, 0);
    this.modelMatrix.scale(this.current_scale, this.current_scale, 1);
    this.modelMatrix.translate(-this.centerX, -this.centerY, 0);
    // Recomendations: How much the triangle grows an shrinks is up to you.
    // Might want to shrink it to x.50 at it's smallest point and x1.50 at it's
    // largest point.
    //
    // Keep in mind that no rendering should be done here. updateAnimation()'s
    // purpose is to update the geometry's modelMatrix and any other variables
    // related to animation. It should be the case that after I call
    // updateAnimation() I should be able to call render() elsewhere and have my
    // geometry complete a frame of animation.
  }
}
