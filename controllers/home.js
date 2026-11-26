const cloudinary = require("../middleware/cloudinary");
const Meal = require("../models/Meal");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  home: (req, res) => {
    res.render("home.ejs", {user: req.user});
  },
  child: (req, res) => {
    res.render("childHome.ejs", {user: req.user, childId: req.query.id});
  },
  meals: (req, res) => {
    res.render("childMeal.ejs", {user: req.user, childId: req.query.id});
  },
  moods:(req, res) => {
    res.render("childMood.ejs", {user: req.user, childId: req.query.id});
  },

  postMeal: async (req, res) => {
    try {
      // Upload image to cloudinary
      console.log(req.body)
      const result = await cloudinary.uploader.upload(req.body.imageData, {resource_type: "image"});
      console.log(result)
      const meal = await Meal.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
      });
      console.log("Meal has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.error(err);
    }
  },
};
