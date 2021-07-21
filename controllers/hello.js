const log4js = require('log4js');

const logger = log4js.getLogger('greetings');
logger.level = 'info';

exports.getGreetingsMessage = async (req, res, next) => {
  if (!req.query?.name?.trim()) {
    return res.status(400).json({ message: 'Query has not to be empty' });
  }

  const { name } = req.query;

  try {
    const greetingsPhrase = `Hello ${name}!`;

    logger.info(`message '${greetingsPhrase}' was sent`);

    res.send(greetingsPhrase);
  } catch (error) {
    return next(error);
  }
};
