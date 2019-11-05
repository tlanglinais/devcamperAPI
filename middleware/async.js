/**
 * Middleware to handle asynchronous functions
 * @param {function} fn Asynchronous function
 */
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
