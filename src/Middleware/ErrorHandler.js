const errorHandler = (error, _req, res, _next) => {
  return res.status(400).json({ message: error.message });
};

module.exports = errorHandler;
