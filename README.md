# Gigih Homework in Module 2.3

Simple Spotify Playlist Server
Create an HTTP Server to store your playlist
1. Add song to your playlist with attributes: Title, Artists (can have multiple artist), URL (from spotify URL)
2. Play song from your playlist
3. Get List of songs from your playlist
4. Make playlist as a model
5. Track song play count in the playlist
6. Add feature to Get list of songs to be sorted by most played

## Note: I also using mongoDB to store data on this homework

# Screenshoot of the API works
1. POST request to add song to playlist (http://localhost:3000/playlist) ![Screenshot (716)](https://github.com/kadek-angga/gigih-homework-module-2/assets/132994058/be9ac06c-807e-435d-b057-77d533c277ae)

2. GET request to get all the song from playlist (http://localhost:3000/playlist) ![Screenshot (717)](https://github.com/kadek-angga/gigih-homework-module-2/assets/132994058/32a95f34-0d2e-4a03-ba88-df074c6d71fb)

3. GET request to get the list of songs sorted by most played (http://localhost:3000/playlist/mostplayed) ![Screenshot (713)](https://github.com/kadek-angga/gigih-homework-module-2/assets/132994058/373c133a-2e48-485d-895e-674b034de85d)

4. GET request to play a song in the playlist (http://localhost:3000/playlist/play/id) *change id with song id in the playlist ![Screenshot (718)](https://github.com/kadek-angga/gigih-homework-module-2/assets/132994058/4faf89fa-200e-4f71-981c-b89f1ebeca43)

5. PUT request to update a song in a playlist (http://localhost:3000/playlist/id) *change id with song id in the playlist ![Screenshot (719)](https://github.com/kadek-angga/gigih-homework-module-2/assets/132994058/cf2ee87a-85e1-4228-8029-fe1fccea3ab6)

6. DELETE request to delete a song from a playlist (http://localhost:3000/playlist/id) *change id with song id in the playlist ![Screenshot (720)](https://github.com/kadek-angga/gigih-homework-module-2/assets/132994058/f89a9325-7ad8-483a-8ac6-7377675beaab)

