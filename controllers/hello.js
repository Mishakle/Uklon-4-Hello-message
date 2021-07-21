const log4js = require('log4js');

const logger = log4js.getLogger('greetings');
logger.level = 'info';

exports.getGreetingsMessage = async (req, res, next) => {
  const { name } = req.query;

  try {
    const greetingsPhrase = `Hello ${name}!`;

    logger.info(`message '${greetingsPhrase}' was sent`);

    res.send(greetingsPhrase);
  } catch (error) {
    return next(error);
  }
};
