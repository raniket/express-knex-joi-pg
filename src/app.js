const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
// const logErrors = require('./common/logErrors');
require('dotenv').config();

const candidateRoutes = require('./routes/candidate');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/candidate', candidateRoutes);


// Handeling errors.
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// app.use(logErrors)

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || 'Internal server error'
    }
  });
});

module.exports = app;
