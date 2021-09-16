const router = require('express').Router();

const controller = require('../controllers/myController');

router.get('/example', controller.findAll);

module.exports = router;
