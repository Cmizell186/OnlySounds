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
        .withMessage('Please provide a valid title.')
        .isLength({ max: 150, min: 5 })
        .withMessage('Must have more than 5 characters, less that 150 characters.'),
    check('imageUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a imageUrl.')
        .isURL()
        .withMessage('Input must be a URL for image.'),
    check('songUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a songUrl.')
        .isURL()
        .withMessage('Input must be a URL for song'),
];

// CREATE functionallity
router.post('/', validateSong, requireAuth, asyncHandler(async (req, res) => {
    const { userId, title, imageUrl, songUrl } = req.body;
    const song = Song.build({ userId, title, imageUrl, songUrl});
    let validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        await song.save();
        return res.json(song);
    } else {
        const errors = validationErrors.array().map(error => error.msg);
        return res.json(errors);
    }
}))

// READ functionallity
router.get('/', requireAuth, asyncHandler(async (req, res) => {
    // get all songs from db
    const songsList = await Song.findAll({
        include: 'User'
    })
    // res.redirect('/discover')
    return res.json(songsList);
}))


router.get('/:id', requireAuth, asyncHandler(async (req, res) => { //specific song page
    const id = req.params.id;
    const song = await Song.findByPk(id)
    return res.json(song);
}))

// UPDATE functionallity
router.put(`/:id`, requireAuth, asyncHandler(async (req, res) => {
    const {id, title, imageUrl} = req.body;
    const song = await Song.findByPk(id);
    song.title = title;
    song.imageUrl = imageUrl;
    await song.save();
    return res.json(song);
}))

// DELETE functionallity

router.delete(`/:id`, requireAuth, asyncHandler(async (req, res) => { // delete specific song
    const {id} = req.body;
    const song = await Song.findByPk(id);
    if (!song) return res.json('song does not exist');
    song.destroy()
    return res.json('success');
}))

module.exports = router;
