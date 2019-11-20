const { sendPersonality } = require('../Controller/sendPersonality');

const apiRouter = require('express').Router();

apiRouter.route('/').post(sendPersonality);
module.exports = apiRouter;
