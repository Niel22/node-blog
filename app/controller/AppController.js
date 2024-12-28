const FetchAllPost = require("../actions/Post/FetchAllPost");


class AppController{

    async index(req, res){

        const locals = {
            title: "Home",
            description: "This is Home"
        }
        const posts = await FetchAllPost.execute();

        return res.render('index', {posts: posts, locals: locals});
    }

    async about(req, res){
        const locals = {
            title: "About",
            description: "This is About"
        }
        return res.render('about', {locals: locals});
    }
}

module.exports = new AppController();