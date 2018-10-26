const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
      type: Number,
      required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Product = mongoose.model("Article", articleSchema);

module.exports = Article;