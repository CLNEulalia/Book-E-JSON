// Require the model which has a connection to the database
const Bookmark = require('../models/bookmark');
// Require a json file which contains some dummy data
const seedData = require('./seeds.json');

// Remove any preexisting data
Bookmark.deleteMany({})
  .then(() => {
    // Insert the dummy data
    return Bookmark.collection.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    // Close the connection to Mongo
    process.exit();
  });
