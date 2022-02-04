const mongoose = require("mongoose");
const { clearKey } = require("../services/cache");

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
