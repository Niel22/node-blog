const FetchSinglePost = require("../actions/Post/FetchSinglePost");

class PostController{

    async store(req, res){
        
        res.redirect('/');
    }

    async show(req, res){
        const post = await FetchSinglePost.execute(req);

        if(post){
            const locals = {
                title: "Nodejs Blog",
                description: "This is a blog built with node express and mongodb"
            }
            return res.render('post/show', {
                post: post,
                locals: locals
            });
        }

        return res.send('Post Not Found');
    }

}

module.exports = new PostController();