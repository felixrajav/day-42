const mongoose = require('mongoose');
const { DB_URL } = process.env;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(response => {
    console.log("DATABASE connection successfully");
  })
  .catch(err => {
    console.error("DATABASE connection failed", err);
  });

module.exports = mongoose;