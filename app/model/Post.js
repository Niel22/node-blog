const mongoose = require("mongoose");

const Schema = mongoose.Schema;

class Post {
  
  static getSchema() {
    
    return new Schema(
      {
        title: {
          type: String,
          required: true,
        },
        body: {
          type: String,
          required: true,
        },
      },
      {
        timestamps: true,
      }
    );
  }
}

module.exports = mongoose.model("Post", Post.getSchema());
