module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3PVr3bmaB0y6/lbVClpC2w=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '5M7m8JZ0CKbM+RwhgViarA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'y7U1kP3m+9LQhNczXMg=='),
    },
  },
});
