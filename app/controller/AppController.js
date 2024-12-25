const FetchAllPost = require("../actions/Post/FetchAllPost");


class AppController{

    async index(req, res){

        const posts = await FetchAllPost.execute();

        return res.render('index', {posts: posts});
    }

    async about(req, res){
        const locals = {
            title: "About",
            description: "This is About page"
        }
        return res.render('about', {locals: locals});
    }
}

module.exports = new AppController();