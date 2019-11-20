const { getPersonality } = require('../watson-model');

exports.sendPersonality = (req, res, next) => {
  const wordPool = req.body;
  getPersonality(wordPool.wordpool)
    .then(personality => {
      res.status(200).send({ userP: JSON.parse(personality) });
    })
    .catch(console.log);
};
