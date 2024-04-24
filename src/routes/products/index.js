const expressRouter = require('express').Router(),
    productController = require('../../controllers/product');

module.exports = (app) => {
    app.get('/products', productController.getAll)
    expressRouter.get('/products', productController.getAll)
    app.use('/api/v1', expressRouter)
}


