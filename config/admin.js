module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eae0d8525bd573ca096dabee44a315cf'),
  },
});
