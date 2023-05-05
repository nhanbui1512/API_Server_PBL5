class userController {
    //GET /news
    index(req, res) {
        res.render('user/dashboard.hbs', { layout: 'userLayout.hbs'});
    }
}
module.exports = new userController();
