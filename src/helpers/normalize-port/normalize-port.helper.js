const NormalizePortHelper = (value) => {

  const port = parseInt(value, 10);

  // named pipe
  if (isNaN(port)) {
    return value;
  }

  // port number
  if (port >= 0) {
    return port;
  }

  return false;
};

module.exports = NormalizePortHelper;
