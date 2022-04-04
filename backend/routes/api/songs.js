const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const { Song } = require('../../db/models');


const router = express.Router();


const validateSong = [
    check('title')
        .exists({checkFalsy:true})
        .isLength({max:150})
        .withMessage('Please provide a valid title.'),
    check('songUrl')
        .exists({checkFalsy:true})
        .withMessage('Please provide a valid songUrl'),
    handleValidationErrors
];


router.get('/', asyncHandler(async(req,res) =>{
    // get all songs from db
    const songsList = await Song.findAll({
        include: 'User'
    })
    return res.json(songsList);
}))

module.exports = router;
