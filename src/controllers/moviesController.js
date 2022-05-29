const db = require("../database/models");

const controller = {
  list: (req, res) => {
    db.Movie.findAll()
      .then((movies) => {
        return res.render("moviesList", { movies });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id)
      .then((movie) => {
        return res.render("moviesDetail", { movie });
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

module.exports = controller;
