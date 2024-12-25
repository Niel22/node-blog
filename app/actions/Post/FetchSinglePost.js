const Post = require("../../model/Post");

class FetchSinglePost{

    async execute(req){

        try{

            let id = req.params.id;

            const post = await Post.findById(id);
            return post;

        }catch(error){
            console.log(error.message);
            return false;
        }


    }
}

module.exports = new FetchSinglePost();