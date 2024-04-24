const express = require('express');
const router = express.Router();
const movieController = require('../../controllers/movie');
const JWTGuard = require('../../config/passport');

router.get('/', JWTGuard.checkIsAuth, movieController.getMovies);
router.post('/', JWTGuard.checkIsAuth, movieController.createMovie);
router.put('/:id', JWTGuard.checkIsAuth, movieController.updateMovie);
router.delete('/:id', JWTGuard.checkIsAuth, movieController.deleteMovie);

module.exports = router;
