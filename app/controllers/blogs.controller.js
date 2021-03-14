const db = require("../models");
const Blog = db.blogs;
const Comment = db.comments;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const blog = {
    title: req.body.title,
    description: req.body.description,
  };

  Blog.create(blog)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Blog.",
      });
    });
};

exports.findAll = (req, res) => {
  Blog.findAll({include: ["comments"]})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving blogs.",
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Blog.findByPk(id, {include: ["comments"]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Blog with id=" + id
        });
      });
  };
  