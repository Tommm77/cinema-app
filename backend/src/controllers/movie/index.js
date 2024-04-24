
const {MOVIES} = require("../../fixtures/Movies");
const movieModel = require("../../models/movie");
const Movie = require("../../models/movie");
/**
 * @description get all movies
 * @param req
 * @param res
 * @return {*}
 */

exports.createMovie = async (req, res) => {
    const { title, description, releaseDate, status, userId } = req.body;

    try {
        const newMovie = await Movie.create({ title, description, releaseDate, status, userId });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


