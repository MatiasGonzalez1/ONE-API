import {createPool} from 'mysql2/promise';
import {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} from './config.js'

//Se crea la conexión


  export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
})
console.log('Connection ready')


//IMPORTANTE SE PUEDEN GENERAR CONSULTAS CON EL SIGUIENTE CODIGO
// pool.query()