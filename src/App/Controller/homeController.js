
class homeController {
    //GET /news
    index(req, res) {
        res.render('home_login.hbs', { layout: false });
    }

}
module.exports = new homeController();
