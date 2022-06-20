const express = require('express');
const router = express.Router();
const Contribution = require('../models/contribution');





router.get('/contributions', (req, res, next) => {
  Contribution.find({})
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/contributions', (req, res, next) => {
  if (req.body) {
    Contribution.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});



router.delete('/contributions/:id', (req, res, next) => {
    Contribution.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;