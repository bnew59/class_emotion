const express = require('express');

const SERVER_CONFIGS = require('./constants/server_constants');

const configureServer = require('./server_backend');
const configureRoutes = require('./routes/index_routes');

const app = express();

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});