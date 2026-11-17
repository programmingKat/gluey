module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  home: (req, res) => {
    res.render("home.ejs", {user: req.user});
  },
};
