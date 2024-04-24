
const {MOVIES} = require("../../fixtures/Movies");
const movieModel = require("../../models/movie");
/**
 * @description get all movies
 * @param req
 * @param res
 * @return {*}
 */

exports.getAll = async (req, res) => {
    try {
        const movies = await movieModel.find().exec()
        return !movies
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR IN RETRIEVE ALL MOVIES '})
            :
            res.status(200).json({statusCode: 200, message: movies})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}

