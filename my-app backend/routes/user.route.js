const auth = require("../middleware/auth");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.get(
    "/api/test/user",
    [auth.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/admin",
    [auth.verifyToken, auth.isAdmin],
    controller.adminBoard
  );
};