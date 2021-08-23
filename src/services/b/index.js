/**
 * @module ServiceB
 * @description Service B
 */

/**
 * Description of the 1st function.
 *
 * @function function1
 * @param {!number} param1 - Description of the 1st parameter.
 * @param {boolean} param2 - Description of the 2nd parameter.
 * @param {(number|boolean)} param3 - Description of the 3rd parameter.
 * @param {?number} param4 - Description of the 4th parameter.
 * @throws {InvalidArgumentException}
 * @throws Will throw an error if the 1st parameter is null.
 * @throws {DivideByZero} 1st parameter must be non-zero.
 * @returns {number} Description of the returned value.
 */
const function1 = (param1, param2, param3, param4) => {
  // code
}

/**
 * Description of the 2nd function.
 * 
 * @async
 * @function function2
 * @returns {Promise<string>} Description of the returned value.
 */
const function2 = async () => { 
  // code
}

export default {
  function1,
  function2
}
