import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({

  title: String,
  route: String,
  blogData: {
    html: String,
  },
  meta: {
    title: String,
    description: String,
  },
  imageData: {
    url: String,
    alt: String,
  },
  createdAt: {
    type: Date,
    default: function () {
      return Date.now();
    },
  },
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
