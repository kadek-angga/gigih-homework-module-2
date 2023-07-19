const express = require("express");
const mongoose = require("mongoose");

const playlistController = require("./controllers/playlist.controller");
require("./utils/database.js");

// Create an instance of the express app
const app = express();
const port = process.env.PORT || 3000;

// Middlewares for parsing JSON and urlencoded form data
app.use(express.json());

// POST request to add a song to the playlist
app.post("/playlist", playlistController.addSong);

// GET request to get all songs in a playlist
app.get("/playlist", playlistController.getSongs);

// GET request to get the list of songs sorted by most played
app.get("/playlist/mostplayed", playlistController.getMostPlayedSongs);

// GET request to play a single song in a playlist
app.get("/playlist/play/:id", playlistController.playSong);

// PUT request to update a song in a playlist
app.put("/playlist/:id", playlistController.updateSong);

// DELETE request to delete a song from a playlist
app.delete("/playlist/:id", playlistController.deleteSong);

// Start the server
app.listen(port, () => {
  console.log(`HTTP Server is listening on http://localhost:${port}`);
});
