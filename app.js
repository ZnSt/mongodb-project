const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log('DATA connect'))
  .catch((error) => {
    console.log('error.message: ', error.message);
    process.exit(1);
  });
