const db = require("../models");
const Comment = db.comments;

exports.createComment = (req, res) => {
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
  
    const comment = {
      name: req.body.name,
      text: req.body.text,
      blogId: req.params.id
    };
    Comment.create(comment)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Comment.",
        });
      });
  };
  
