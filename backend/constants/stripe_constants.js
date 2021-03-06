const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_eS1ecaT1LQiKrK1br1G4apIr';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;