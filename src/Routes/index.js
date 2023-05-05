const homeRouter = require('./homeRoute');
const apiRouter = require('./apiRoute');
const userRouter = require('./userRoute')


function route(app) {
    app.use('/', homeRouter);
    app.use('/api',apiRouter)
    app.use('/user',userRouter)
}
module.exports = route;
