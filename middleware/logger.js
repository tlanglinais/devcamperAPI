/**
 * Function to log to the dev console
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {function} next Next middleware function
 */
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

module.exports = logger;
