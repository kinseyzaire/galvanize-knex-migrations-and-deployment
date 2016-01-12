module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/library'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
