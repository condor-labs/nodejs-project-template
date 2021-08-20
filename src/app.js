const express = require('express');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// settings
if (process.env.NODE_ENV !== 'test') {
  app.set('port', process.env.PORT || 3000);
}

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

module.exports = app;
