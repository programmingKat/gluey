const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
//const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", ensureAuth, homeController.home);
router.get("/child", ensureAuth, homeController.child);
router.get("/meals", ensureAuth, homeController.meals );
router.post("/meals", ensureAuth, homeController.postMeal);
router.get("/moods", ensureAuth, homeController.moods );
//router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.post("/registerChild", authController.postRegisterChild);


module.exports = router;
