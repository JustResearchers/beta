const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;

/**
 * handle parsing req body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors());
app.use(cookieParser());

/**
 * define linking routes
 */
const userRouter = require('./routers/');

// requiring in dotenv to use environment variable process.env.POSTGRES_URI from .env file
require('dotenv').config();

// serve the build file at the root
if (process.env.NODE_ENV == 'production') {
  app.use('/', express.static(path.resolve(__dirname, '/build')));
}

/**
 * define route handlers
 */
// root router
app.use('/', express.static('/build'));

// account router
app.post('/signup', userController.newUser, (req, res) => {});

app.post('/login', userController.verifyUser, (req, res) => {});

app.post('/logout', (req, res) => {
  // res.clearCookie('session-token');
  // res.redirect('/');
});

// OAuth router - LinkedIn

/**
 * catch-all router handler for any reqs to an unknow route
 */
app.use('*', (req, res) => res.sendStatus(404));

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// for Heroku to choose first available port || 3000 is used of running on the local server
// const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT || PORT, () =>
  console.log(`Listening on the PORT: ${process.env.PORT}`)
);
