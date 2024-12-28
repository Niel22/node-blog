const FetchAllPost = require("../actions/Post/FetchAllPost");
const FetchSearchResult = require("../actions/Search/FetchSearchResult");


class AppController{

    async index(req, res){

        const locals = {
            title: "Home",
            description: "This is Home"
        }

        const data = await FetchAllPost.execute(req);

        
        return res.render('index', {data: data.data, locals: locals});
    }

    async about(req, res){
        const locals = {
            title: "About",
            description: "This is About"
        }
        return res.render('about', {locals: locals});
    }

    async search(req, res)
    {
        const data = await FetchSearchResult.execute(req);

        if(data != "")
        {
            return res.render('search', {data: data});
        }

        return res.send('No result found');
    }
}

module.exports = new AppController();