const mongoose = require('mongoose');
const { DB_HOST } = require('./config');

mongoose
  .connect(DB_HOST)
  .then(() => console.log('DATA connect'))
  .catch((error) => {
    console.log('error.message: ', error.message);
    process.exit(1);
  });
