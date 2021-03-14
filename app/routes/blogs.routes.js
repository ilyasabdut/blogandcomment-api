module.exports = app => {
    const blogs = require("../controllers/blogs.controller.js");
    const comments = require("../controllers/comments.controller.js");

  
    var router = require("express").Router();
  
    app.use('/api/blogs', router);
  
    router.get("/", blogs.findAll);

    router.post("/", blogs.create);

    router.get("/:id", blogs.findOne);

    router.post("/comments/:id", comments.createComment);

  
  };
  