# express-api-jukebox-back-end-lab

## Routes

| HTTP Method | Route  | Description           | Controller Method             |
|-------------|--------|-----------------------|-------------------------------|
| POST        | /new   | Create a new track    | trackController.createTrack   |
| GET         | /      | Get all tracks        | trackController.trackIndex    |
| GET         | /:id   | Get track details     | trackController.trackDetails  |
| PUT         | /:id   | Update a track        | trackController.trackUpdate   |
| DELETE      | /:id   | Delete a track        | trackController.trackDelete   |
