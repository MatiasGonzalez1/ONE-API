import {pool} from '../db.js'

//GET all from table characters
export const getCharacters = async (req, res)=>{
  const [rows]= await pool.query('SELECT * FROM characters')
  res.json(rows)
}

//POST to table characters
export const postCharacters = async (req, res)=> {
  const {name} = req.body
  const [rows] = await pool.query('INSERT INTO characters (name) VALUES (?)', [name])
  res.send({
    id: rows.insertId,
    name
  })
}

export const putCharacters = (req, res)=> res.send('Actualizando personajes')

export const deleteCharacters = (req, res)=> res.send('Eliminando personajes')