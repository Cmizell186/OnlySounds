const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check, validationResult } = require('express-validator');

const { Comment } = require('../../db/models');

const router = express.Router();

const validateComment = [
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Fill in comment.')
        .isLength({ max: 280 })
        .withMessage('Max character count of 280'),
]

router.post('/', validateComment, asyncHandler(async(req,res) =>{
    const {userId, songId, description} = req.body;
    const comment = Comment.build({userId, songId, description});
    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        const newComment = await comment.save()
        return res.json(newComment)
    } else {
        const errors = validatorErrors.array().map(error => error.msg)
        return res.json(errors);
    }

}))
