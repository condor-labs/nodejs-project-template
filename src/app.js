const express = require('express');
const morgan = require('morgan');
const logger = require('@condor-labs/logger');
const swaggerUi = require('swagger-ui-express');

const app = express();

const swaggerDoc = require('./swagger.json');

//Importing Routes
const projectRoutes = require('./routes/myRoutes');

// settings
if (process.env.NODE_ENV !== 'test') {
  app.set('port', process.env.PORT || 3000);
}

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/', projectRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// starting the server
app.listen(app.get('port'), () => {
  logger.info(`server on port ${app.get('port')}`);
});

module.exports = app;
