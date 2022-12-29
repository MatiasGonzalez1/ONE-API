import {pool} from '../db.js'

export const getCharacters = (req, res)=> res.send('Obteniendo personajes')

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