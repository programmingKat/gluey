module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  home: (req, res) => {
    res.render("home.ejs", {user: req.user});
  },
    child: (req, res) => {
    res.render("child.ejs", {user: req.user, childId: req.query.id});
  },
};
