const express =
  require("express");

const userRouter = require("./user.routes");
const authRouter = require("./auth.route");
const router = express.Router();

router.use("/auth", authRouter);
router.use(
  "/users",
  userRouter
);

module.exports =
  router;