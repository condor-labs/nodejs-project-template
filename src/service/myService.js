const myRepository = require('../repository/myRepository');

const myService = () => {
  const response = myRepository.findAll();
  return response;
};

module.exports = {
  myService,
};
