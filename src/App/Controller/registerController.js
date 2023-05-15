class registerController {
    //GET /news
    index(req, res) {
        res.render('register.hbs', { layout: false });
    }
}
module.exports = new registerController();
