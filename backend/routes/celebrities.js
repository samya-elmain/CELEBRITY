const express = require('express')

const {
    createCelebritie,
    getCelebritie,
    getCelebrities,
    deleteCelebritie,
    updateCelebritie
} = require('../controllers/celebritieController')

const router = express.Router()

router.get('/', getCelebrities)

router.get('/:id', getCelebritie)

router.post('/', createCelebritie)
 
router.delete('/:id', deleteCelebritie)

router.patch('/:id', updateCelebritie) 

module.exports = router
