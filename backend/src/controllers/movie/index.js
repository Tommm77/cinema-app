
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

// Find movie from userid
exports.getMovies = async (req, res) => {
    // fonctionne pas
//    console.log(req.user._id);
//    const { userId } = req.user._id;

    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, description, releaseDate, status } = req.body;

    try {
        const updatedMovie = await Movie.findByIdAndUpdate(id, { title, description, releaseDate, status }, { new: true });
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteMovie = async (req, res) => {
    const { id } = req.params;

    try {
        await Movie.findOneAndDelete({ _id: id, userId });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};