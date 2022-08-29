const parse = require('pg-connection-string').parse;
const database = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: database.host,
      port: database.port,
      database: database.database,
      user: database.user,
      password: database.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
