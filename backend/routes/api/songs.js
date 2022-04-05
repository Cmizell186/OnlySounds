const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { check, validationResult } = require('express-validator');
const { Song } = require('../../db/models');


const router = express.Router();


const validateSong = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ max: 150 })
        .withMessage('Please provide a valid title.'),
    check('songUrl')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage('Please provide a valid songUrl'),
    handleValidationErrors
];

// CREATE functionallity
router.post('/',  validateSong,asyncHandler(async (req, res) => {
    const {userId,title, imageUrl, songUrl} = req.body;
    const song = Song.build({userId, title, imageUrl, songUrl});
    const validationErrors = validationResult(req);

    if(validationErrors.isEmpty()){
        await song.save();
        return res.json('success');
    } else {
        const errors = validationErrors.array().map(error=> error.msg);
        return res.json(errors);
    }
}))

// READ functionallity
router.get('/', asyncHandler(async (req, res) => {
    // get all songs from db
    const songsList = await Song.findAll({
        include: 'User'
    })
    return res.json(songsList);
}))

// UPDATE functionallity

// DELETE functionallity

module.exports = router;
