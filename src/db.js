import {createPool} from 'mysql2/promise';

//Se crea la conexión
export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'one_db'
})


//IMPORTANTE SE PUEDEN GENERAR CONSULTAS CON EL SIGUIENTE CODIGO
// pool.query()