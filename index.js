const express = require('express');
// instantiate express
const app = express();

/* START CONTROLLERS HERE */

/* END CONTROLLERS HERE */

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
