const mongoose = require('mongoose');
const DB_HOST =
  'mongodb+srv://libertydDomain:yLW3absosYdR7D4p@cluster0.ocqvs9u.mongodb.net/online_shop?retryWrites=true&w=majority';
mongoose
  .connect(DB_HOST)
  .then(() => console.log('DATA connect'))
  .catch((error) => {
    console.log('error.message: ', error.message);
    process.exit(1);
  });
