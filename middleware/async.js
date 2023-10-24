const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)  // error from ./error-handler.js
      // next passes it to the next middleware
    }
  }
};

module.exports = asyncWrapper;