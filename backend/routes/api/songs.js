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
        .notEmpty()
        .isLength({ max: 150, min:5 })
        .withMessage('Please provide a valid title.'),
    check('songUrl')
        .exists({ checkFalsy: true })
        .notEmpty()
        .isURL()
        .withMessage('Please provide a valid songUrl.'),
    check('imageUrl')
        .exists({checkFalsy: true})
        .notEmpty()
        .isURL()
        .withMessage('Please provide a valid imageUrl.'),
    handleValidationErrors
];

// CREATE functionallity
router.post('/', validateSong, asyncHandler(async (req, res) => {
    const { userId, title, imageUrl, songUrl } = req.body;
    const song = Song.build({ userId, title, imageUrl, songUrl });
    let validationErrors = validationResult(req);

    if (validationErrors.isEmpty()) {
        await song.save();
        return res.json('success');
    } else if(validationErrors){
        const errors = validationErrors.array().map(error => error.msg);
        console.log(errors, "++++++++++");
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


router.get('/:id', asyncHandler(async (req, res) => { //specific song page
    const id = req.params.id;
    const song = await Song.findByPk(id)
    return res.json(song);
}))

// UPDATE functionallity
router.put(`/:id`, asyncHandler(async (req, res) => {
    const id = req.params.id;
    const song = await Song.update(req.body, {
        where: { id: id }
    });
    return res.json(song);
}))

// DELETE functionallity

router.delete(`/:id`, asyncHandler(async (req, res) => { // delete specific song

}))

module.exports = router;
