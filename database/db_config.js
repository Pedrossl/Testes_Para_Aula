import knex from 'knex'
// importa o arquivo de configuração do banco de dados
import { development } from './knexfile.js'
const connection = knex(development)
export default connection
