const { myService } = require('../service/myService');

const controller = {};

controller.findAll = async (req, res) => {
  const example = await myService();
  res.send(example);
};

module.exports = controller;
