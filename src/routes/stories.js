const express = require("express");
const router = express.Router();
require('dotenv').config();

// Load Story model
const Story = require("../models/story");
const User = require("../models/user");

router.get('/stories', (req, res, next) => {

  Story.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/stories', (req, res, next) => {
  if (req.body) {
    Story.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {

    res.json({
      error: 'The input field is empty',
    });
  }
});

router.post('/stories/:id', (req, res, next) => {

  const updatedStory = req.body
   if (req.body) {
    Story.findByIdAndUpdate({_id:updatedStory._id}, updatedStory)
      .then((data) => res.json(data))
      .catch(next);
  } else {

    res.json({
      error: 'The input field is empty',
    });
  }
})



router.delete('/stories/:id', (req, res, next) => {
    Story.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});



module.exports = router;