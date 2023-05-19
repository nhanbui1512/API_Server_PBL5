
class homeController {
    //GET /news
    index(req, res) {
        res.render('home_login.hbs', { layout: false });
    }

    chart(req,response){
        response.render('chart.hbs',{layout: false})
    }
}
module.exports = new homeController();
