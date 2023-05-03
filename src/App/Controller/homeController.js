class homeController {
    //GET /news
    index(req, res) {
        res.render('home.hbs', { layout: false });
    }
}
module.exports = new homeController();
