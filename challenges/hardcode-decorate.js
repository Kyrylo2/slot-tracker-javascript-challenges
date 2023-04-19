/**
 * Implement the hardcodeDecorate(fn, params) function that takes two arguments:
 *     - fn     - function that should be decorated
 *     - params - array of parameters
 * and returns a new function that calls fn with parameters specified in params array
 */

/**
 * Returns a new function that calls the provided function with the specified parameters.
 * @param {Function} fn - The function to be decorated.
 * @param {Array} params - An array of parameters to be passed to the decorated function.
 * @returns {Function} A new function that calls the provided function with the specified parameters.
 */
function hardcodeDecorate(fn, params) {
  return function () {
    return fn(...params);
  };
}

/**
 * Logs the user's email and name to the console.
 * @param {string} email - The user's email address.
 * @param {string} name - The user's name.
 * @returns {void}
 */
function printUserInfo(email, name) {
  console.log(`${name} (${email})`);
}

// Creates a new function called printPeterInfo that calls the printUserInfo function with the specified email and name.
const printPeterInfo = hardcodeDecorate(printUserInfo, [
  'peter@mail.com',
  'Peter',
]);

// Calls the printPeterInfo function, which in turn calls the printUserInfo function with the pre-specified email and name.
printPeterInfo(); // Peter (peter@mail.com)

// Exports the hardcodeDecorate function so it can be used in other modules.
module.exports = hardcodeDecorate;
