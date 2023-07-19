const mongoose = require("mongoose");

// Create Schema
const playlistsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artists: {
      type: Array,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    playCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Create Model
const Playlists = mongoose.model("spotify_playlists", playlistsSchema);

module.exports = Playlists;
