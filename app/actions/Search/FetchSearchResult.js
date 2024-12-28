const Post = require("../../model/Post");

class FetchSearchResult{

    async execute(req)
    {
        try{

            let searchTerm = req.body.searchTerm;
            
        const SearchNoSpecialCharacter = searchTerm.replace(/[^a-zA-Z0-9]/g, "");

        const data = await Post.find({
            $or: [
                {title: {$regex: new RegExp(SearchNoSpecialCharacter)}},
                {body: {$regex: new RegExp(SearchNoSpecialCharacter)}},
            ]
        })

        return data;
    }catch(error)
    {
        console.log(error);
        return '';
    }


    }
}

module.exports = new FetchSearchResult();