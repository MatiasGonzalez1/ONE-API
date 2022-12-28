import {Router} from 'express';
import {pool} from '../db.js'
const router = Router();

//Se realiza la consulta a la db
router.get('/ping',async (req,res)=> {
  const [result] = await pool.query('SELECT * FROM characters')
  res.json(result)
});

export default router;

//al hacer export default en el archivo donde se requiere se puede poner cualquier nombre para hacer referencia