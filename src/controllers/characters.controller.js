import {pool} from '../db.js'

//GET all from table characters
export const getCharacters = async (req, res)=>{
  const [rows]= await pool.query('SELECT * FROM characters')
  res.json(rows)
}

export const getOneCharacter = async (req, res)=>{
  // const id = req.params.id
  const [rows]= await pool.query('SELECT * FROM characters WHERE id_character = ?', [req.params.id])

  if(rows.length <= 0) return res.status(404).json({
    message: 'Character not found'
  })
  res.json(rows[0])
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