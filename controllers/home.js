module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  test: (req, res) => {
    res.render("home.ejs");
  },
};
