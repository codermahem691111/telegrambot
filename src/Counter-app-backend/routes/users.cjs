const express = require('express');
const User = require('../models/User.cjs');
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  const { username } = req.body;
  let user = await User.findOne({ username });

  if (!user) {
    user = new User({ username });
    await user.save();
  }

  res.json(user);
});

// Increment counter route
router.post('/increment', async (req, res) => {
  const { username } = req.body;
  const user = await User.findOneAndUpdate(
    { username },
    { $inc: { counter: 1 } },
    { new: true }
  );

  res.json(user);
});

router.post('/increment/:value', async (req, res) => {
  const { username } = req.body;
  const incrementValue = parseInt(req.params.value, 10);
  const user = await User.findOneAndUpdate(
    { username },
    { $inc: { counter: incrementValue } },
    { new: true }
  );

  res.json(user);
});
module.exports = router;