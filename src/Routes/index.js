const homeRouter = require('./homeRoute');
const apiRouter = require('./apiRoute');
const userRouter = require('./userRoute');
const registerRoute = require('./registerRoute');

const userMiddleware = require('../App/Middleware/userMiddleware');

function route(app) {
    app.use('/', homeRouter);
    app.use('/api', apiRouter);
    app.use('/user', userMiddleware, userRouter);
    app.use('/register', registerRoute);
}
module.exports = route;
