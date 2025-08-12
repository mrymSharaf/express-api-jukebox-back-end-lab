const Track = require('../models/Track')

async function createTrack(req, res) {

    try {
        const newTrack = await Track.create(req.body)
        res.status(201).json(newTrack)

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }

}

async function trackIndex(req, res) {

    try {
        const allTracks = await Track.find()

        if (allTracks) {
            res.status(200).json(allTracks)
        } else {
            res.sendStatus(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }

}


module.exports = {
    createTrack,
    trackIndex
}