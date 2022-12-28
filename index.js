import express from "express";
import {pool} from './db.js'

const app = express();

//Se realiza la consulta a la db
app.get('/ping',async (req,res)=> {
  const [result] = await pool.query('SELECT * FROM characters')
  res.json(result)
});

app.get('/employees', (req, res)=> res.send('Obteniendo empleados'))

app.post('/employees', (req, res)=> res.send('Creando empleados'))

app.put('/employees', (req, res)=> res.send('Actualizando empleados'))

app.delete('/employees', (req, res)=> res.send('Eliminando empleados'))

app.listen(3000)

console.log('Server running on port 3000')