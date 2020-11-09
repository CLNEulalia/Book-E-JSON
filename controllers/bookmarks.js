const express = require('express');
const router = express.Router();

// import the bookmark model
const Bookmark = require('../models/Bookmark');

// Index: GET all the bookmarks
router.get('/', (req, res, next) => {
  // 1. Get all of the bookmarks from the DB
  Bookmark.find({})
    // 2. Send them back to the client as JSON
    .then((bookmarks) => res.json(bookmarks))
    // 3. If there's an error pass it on!
    .catch(next);
});

module.exports = router;
