require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const db = require("./app/models");
const Blog = db.blogs;
const Comment = db.comments;

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
//   initial();
// });

db.sequelize.sync();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Blog and Comment API" });
});

require("./app/routes/blogs.routes.js")(app);

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Blog.create({
    id: 1,
    title: "Lorem ipsum dolor sit amet,",
    description: "consectetur adipiscing elit. Maecenas vehicula pellentesque ullamcorper. ",
  });

  Blog.create({
    id: 2,
    title: "Nulla quis convallis ante. ",
    description: "Nulla vel dolor orci. Donec rutrum libero nisl, vitae posuere libero feugiat eu. ",
  });

  Comment.create({
    id: 1,
    blogId:1,
    name: "User1",
    text: "Comment1",
  });

  Comment.create({
    id: 2,
    blogId:2,
    name: "User2",
    text: "Comment2",
  });
}
