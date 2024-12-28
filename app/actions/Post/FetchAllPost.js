const Post = require("../../model/Post");

class FetchAllPost {
  async execute(req) {
    try {
      let perPage = 10;
      let page = req.params.page || 1;

      const posts = await Post.aggregate(
        [
            {
                $sort : {
                    createdAt: -1
                }
            }
        ]
      ).skip(
        perPage * page - perPage
      ).limit(perPage);

      const count = await Post.countDocuments();
      const nextPage = parseInt(page) + 1;
      const hasNextPage = nextPage <= Math.ceil(count / perPage);

      return { data: {
        posts: posts,
        count: count,
        current: page,
        nextPage: hasNextPage ? nextPage : null
      }};
    } catch (error) {
      console.log(error.message);
      return "";
    }
  }
}

module.exports = new FetchAllPost();
