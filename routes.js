const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('calendar', '/:year/:month?', 'index')
