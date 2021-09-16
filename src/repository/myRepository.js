const logger = require('@condor-labs/logger');

const db = {
  user: [{ id: '1', name: 'Sebastián Restrepo Moreno' }],
};

const findAll = () => {
  try {
    const collection = db || [];
    return collection;
  } catch (e) {
    logger.error(e);
  }
};

module.exports = {
  findAll,
};
