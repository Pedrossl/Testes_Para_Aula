// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// configuração do banco de dados
export const development = {
  client: 'mysql2',
  connection: {
    database: 'farmacia',
    user: 'lobatoSQL',
    password: '1234',
    host: '127.0.0.1'
  }
};