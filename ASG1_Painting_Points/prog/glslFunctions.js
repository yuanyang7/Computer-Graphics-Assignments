/**
 * Sends a float value to the specified uniform variable within GLSL shaders.
 * Prints an error message if unsuccessful.
 *
 * @param {float} val The float value being passed to uniform variable
 * @param {String} uniformName The name of the uniform variable
 */
function sendUniformFloatToGLSL(val, uniformName) {
    uniform = gl.getUniformLocation(gl.program, uniformName);
    console.log('sending' + uniformName);
    if(!uniform)
        console.log('Failed to locate' + uniformName);
    gl.uniform1f(uniform, val);
}

/**
 * Sends an JavaSript array (vector) to the specified uniform variable within
 * GLSL shaders. Array can be of length 2-4.
 *
 * @param {Array} val Array (vector) being passed to uniform variable
 * @param {String} uniformName The name of the uniform variable
 */
function sendUniformVec4ToGLSL(val, uniformName) {
    uniform = gl.getUniformLocation(gl.program, uniformName);
    if(!uniform)
        console.log('Failed to locate' + uniformName);
    gl.uniform4f(uniform, val[0], val[1], val[2], val[3]);
}