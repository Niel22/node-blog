const Post = require("../../model/Post");

class FetchAllPost{

    async execute(){
        try{
            const posts = await Post.find();

            return posts;
        }catch(error){
            console.log(error.message);
            return '';
        }
    }
}

module.exports = new FetchAllPost();