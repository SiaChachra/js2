const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  albums: [{
    title: String,
    year: Number
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
