const expressRouter = require('express').Router(),
    movieController = require('../../controllers/movie');

module.exports = (app) => {
    app.get('/movies', movieController.getAll)
    expressRouter.get('/movies', movieController.getAll)
    app.use('/api/v1', expressRouter)
}


