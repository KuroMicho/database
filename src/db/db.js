var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '12345678',
      database : 'lordosmar'
    }
  });

  module.exports = knex