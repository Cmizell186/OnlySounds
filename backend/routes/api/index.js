const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songQueryRouter = require('./songs.js');
const commentRouter = require('./comments');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songQueryRouter);
router.use('/comments', commentRouter);


router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}));

// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });



module.exports = router;
