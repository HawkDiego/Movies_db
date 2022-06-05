const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies", moviesController.list);
router.get("/movies/new", moviesController.new);
router.get("/movies/recommended", moviesController.recomended);
router.get("/movies/detail/:id", moviesController.detail);

// Rutas para el segundo taller sequelize

router.get("/movies/add", moviesController.add);
router.post("/movies/create", moviesController.create);

router.get("/movies/edit/:id", moviesController.edit);
router.post("/movies/update/:id", moviesController.update);



module.exports = router;
