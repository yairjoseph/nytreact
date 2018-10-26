const router = require("express").Router()
const Product = require("../models/article.js");

router.post("/api/articles", function(req, res) {
    // as long as req.body matches what the model expects, this should insert into the database
    Article.create(req.body)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      // if not, we can at least catch the error
      res.json(err);
    });
  });
  
  router.get("/api/articles", function(req, res) {
    Article.find({})
    .then((docs) => {
      res.json(docs);
    });
  });

  app.delete("/api/articles/:id", function(req,res){
    console.log(req.params.id)
    db.Article.findByIdAndRemove(req.params.id, function(err, response){
      // console.log(response)
      if (err) throw err;
      res.json(response);    
  
    });
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });