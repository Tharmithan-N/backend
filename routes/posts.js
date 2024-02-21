const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

// get a post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Post a post (Create function)
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete a post by id
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete(req.params.postId);
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.postId, {
      $set: { title: req.body.title },
      $set: { description: req.body.description },
    });
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
