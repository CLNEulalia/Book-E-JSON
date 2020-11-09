const express = require('express');
// instantiate express
const app = express();

// Use middleware to parse the data in the HTTP request body and add
// a property of body to the request object containing a POJO with with data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* START CONTROLLERS HERE */
const bookmarksController = require('./controllers/bookmarks');
app.use('/api/bookmarks/', bookmarksController);
/* END CONTROLLERS HERE */

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
