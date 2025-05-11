const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { checkNotAuthenticated, checkAuthenticated } = require("../middleware/authMiddleware");

router.get("/login", checkNotAuthenticated, authController.getLogin);
router.post("/login", authController.postLogin);

router.get("/register", checkNotAuthenticated, authController.getSignup);
router.post("/register", authController.postSignup);

router.get("/logout", authController.logout);

module.exports = router;
