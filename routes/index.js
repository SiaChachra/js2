const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const Artist = require('../models/artist');

// Welcome Page
router.get('/', (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

// Add Artist
router.post('/artists/add', ensureAuthenticated, (req, res) => {
  const { name, genre, albums } = req.body;
  const newArtist = new Artist({
    name,
    genre,
    albums,
    user: req.user.id
  });
  newArtist.save().then(artist => {
    req.flash('success_msg', 'Artist added successfully');
    res.redirect('/dashboard');
  });
});

module.exports = router;
