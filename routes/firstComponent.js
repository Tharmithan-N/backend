const express = require("express");
const router = express.Router();
const FirstComponent = require("../models/FirstComponent");

//add a post
router.post("/", async (req, res) => {
  const firstComponent = new FirstComponent({
    image: req.body.image,
    title: req.body.title,
    subTitle: req.body.subTitle,
    content: req.body.content,
  });

  try {
    const savedFirstComponent = await firstComponent.save();
    res.json(savedFirstComponent);
  } catch (err) {
    res.json({ message: err });
  }
});

//get a post
router.get("/", async (req, res) => {
  try {
    const firstComponet = await FirstComponent.find();
    res.json(firstComponet);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
