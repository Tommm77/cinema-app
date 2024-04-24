module.exports = (app) => {
    require('./users')(app)
    require('./products')(app)
    require('./auth')(app)
}