const router = require("express").Router();

// routes
router.get("/", (req, res) => {
  res.render("index", {
    title: "test template engine",
    message: "Hello pug template engine",
  });
});

module.exports = router;
