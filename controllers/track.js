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


module.exports = {
    createTrack
}