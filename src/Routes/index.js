const homeRouter = require('./homeRoute');
const apiRouter = require('./apiRoute');


function route(app) {
    app.use('/', homeRouter);
    app.use('/api',apiRouter)
}
module.exports = route;
