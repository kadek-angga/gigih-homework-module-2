const Playlists = require("../models/playlists.model");

// POST request to add a song to the playlist
const addSong = async (req, res) => {
  const { title, artists, url } = req.body;

  try {
    const playlist = new Playlists({ title, artists, url });
    await playlist.save();

    res.status(201).json({
      message: "Song succesfully added to playlist",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// GET request to get all songs in a playlist
const getSongs = async (req, res) => {
  try {
    const playlist = await Playlists.find();
    res.status(200).json({
      playlist,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET request to get the list of songs sorted by most played
const getMostPlayedSongs = async (req, res) => {
  try {
    const playlist = await Playlists.find().sort({ playCount: -1 }).limit(10);
    res.status(200).json({
      playlist,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// GET request to play a single song in a playlist
const playSong = async (req, res) => {
  const { id } = req.params;

  try {
    const playlist = await Playlists.findById(id);

    if (!playlist) {
      res.status(404).json({
        error: "Playlist not found",
      });
    } else {
      playlist.playCount++;
      await playlist.save();

      res.status(200).json({
        message: "Song succesfully played",
        playlist,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// PUT request to update a song in a playlist
const updateSong = async (req, res) => {
  const { id } = req.params;
  const { title, artists, url } = req.body;

  try {
    const playlist = await Playlists.findByIdAndUpdate(
      id,
      { title, artists, url },
      { new: true }
    );

    if (!playlist) {
      res.status(404).json({
        error: "Playlist not found",
      });
    } else {
      res.status(200).json({
        message: "Song succesfully updated",
        playlist,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// DELETE request to delete a song from a playlist
const deleteSong = async (req, res) => {
  const { id } = req.params;

  try {
    const playlist = await Playlists.findByIdAndDelete(id);

    if (!playlist) {
      res.status(404).json({
        error: "Playlist not found",
      });
    } else {
      res.status(200).json({
        message: "Song succesfully deleted",
        playlist,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Export the controller
module.exports = {
  addSong,
  getSongs,
  getMostPlayedSongs,
  playSong,
  updateSong,
  deleteSong,
};
