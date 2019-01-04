const paymentApi = require('./payment_routes');

const configureRoutes = app => {
  paymentApi(app);
};

module.exports = configureRoutes;