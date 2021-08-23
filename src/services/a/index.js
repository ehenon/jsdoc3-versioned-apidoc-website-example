/**
 * @module ServiceA
 * @description Service A
 */

/**
 * Description of the 1st function.
 *
 * @function function1
 * @param {string} param1 - Description of the 1st parameter.
 * @param {object} param2 - Description of the 2nd parameter.
 * @param {string} param2.prop1 - Description of the 1st property of the 2nd parameter.
 * @param {number} param2.prop2 - Description of the 2nd property of the 2nd parameter.
 * @param {object[]} param3 - Description of the 3rd parameter.
 * @param {string} param3[].prop1 - Description of the 1st property of the objects that can be contained in the 3rd parameter.
 * @param {string} param3[].prop2 - Description of the 2nd property of the objects that can be contained in the 3rd parameter.
 * @param {string} [param4] - Description of the 4th parameter.
 * @param {string} [param5=Default Value] - Description of the 5th parameter.
 * @param {*} param6 - Description of the 6th parameter.
 * @returns {string} Description of the returned value.
 */
 const function1 = (param1, param2, param3, param4, param5, param6) => {
  // code
}

/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */

/**
 * Does something asynchronously and executes the callback on completion.
 * 
 * @async
 * @function function2
 * @param {requestCallback} cb - The callback that handles the response.
 */
const function2 = async (cb) => { 
  // code
}

export default {
  function1,
  function2
}
