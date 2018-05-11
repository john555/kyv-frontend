const config = {
  development: {
    AUTH_API_URL: 'https://api.andela.com',
    API_BASE_URL: 'http://localhost:5000',
  },
  staging: {
    AUTH_API_URL: 'https://api.andela.com',
    API_BASE_URL: '',
  },
  production: {
    AUTH_API_URL: 'https://api.andela.com',
    API_BASE_URL: '',
  },
  testing: {
    AUTH_API_URL: 'https://api.andela.com',
    API_BASE_URL: 'http://localhost:5000',
  },
};

export default config[process.env.NODE_ENV || 'development'];
