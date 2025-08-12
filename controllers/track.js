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

async function trackDetails(req, res) {

    try {
        const track = await Track.findById(req.params.id)

        if (track) {
            res.status(200).json(track)
        } else {
            res.sendStatus(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }

}

async function trackUpdate(req, res) {

    try {
        const Updatedtrack = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (Updatedtrack) {
            res.status(200).json(Updatedtrack)
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
    trackIndex,
    trackDetails,
    trackUpdate
}