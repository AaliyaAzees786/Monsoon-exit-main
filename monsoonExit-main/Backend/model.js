const mongoose = require('mongoose')
const blogSchema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const BlogData=mongoose.model('blog',blogSchema);
module.exports=BlogData