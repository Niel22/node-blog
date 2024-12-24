class AppController{

    async index(req, res){
        const locals = {
            title: "Home",
            description: "This is home page"
        }
        res.render('index', {locals: locals});
    }

    async about(req, res){
        const locals = {
            title: "About",
            description: "This is About page"
        }
        res.render('about', {locals: locals});
    }
}

module.exports = new AppController();