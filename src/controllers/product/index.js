
const {PRODUCTS} = require("../../fixtures/Products");
const productModel = require("../../models/product");
/**
 * @description get all products
 * @param req
 * @param res
 * @return {*}
 */

exports.getAll = async (req, res) => {
    try {
        const products = await productModel.find().exec()
        return !products
            ?
            res.status(400).json({statusCode: 400, message: 'ERROR IN RETRIEVE ALL PRODUCTS '})
            :
            res.status(200).json({statusCode: 200, message: products})
    } catch (e) {
        console.log(e)
        return res.status(400).json({statusCode: 400, message: e.message})
    }
}

