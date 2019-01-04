const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_mIruoGN7m85ubBiYK8rpQJ73';

export default STRIPE_PUBLISHABLE;