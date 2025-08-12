const express = require('express')
const router = express.Router()
const trackController = require('../controllers/track')

router.post('/new', trackController.createTrack)
router.get('/', trackController.trackIndex)
router.get('/:id', trackController.trackDetails)
router.put('/:id', trackController.trackUpdate)
router.delete('/:id', trackController.trackDelete)

module.exports = router