function errorHandling(err, req, res, next) {
    if (err) {
      let status = err.status || 500;
      res.json({
        status,
        msg: "An error has occurred, Please review and retry.",
      });
    }
    next();
  }
  
  module.exports = { errorHandling };