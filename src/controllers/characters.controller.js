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

export const putCharacters = async (req, res)=> {
  //las llaves son el equivalente a id = req.params.id
  const {id} = req.params
  const {name} = req.body
  
  //en el caso de querer cambiar solo un dato se debe cambiar el name = ? por name = IFNULL(?, name)
  const result = await pool.query('UPDATE characters SET name = ? WHERE id_character = ?', [name, id])

  if (result.affectedRows == 0) return res.status(404).json({
    message: 'Character not found'
  })

  const [rows]= await pool.query('SELECT * FROM characters WHERE id_character = ?', [id])

  res.json(rows[0]) 
}

export const deleteCharacters = async (req, res)=> {
  const [result] = await pool.query('DELETE FROM characters WHERE id_character = ?', [req.params.id])
  
  if(result.affectedRows <= 0) return res.status(404).json({
    message: 'Character not found'
  })
  res.sendStatus(204)
}