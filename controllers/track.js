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
            res.status(204)
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
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }

}

async function trackUpdate(req, res) {

    try {
        const updatedtrack = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (updatedtrack) {
            res.status(200).json(updatedtrack)
        } else {
            res.status(204)
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }

}

async function trackDelete(req, res) {

    try {
        const deletedtrack = await Track.findByIdAndDelete(req.params.id, req.body)

        if (deletedtrack) {
            res.status(200).json(deletedtrack)
        } else {
            res.sendStatus(404)
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
    trackUpdate,
    trackDelete
}