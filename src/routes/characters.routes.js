import {Router} from 'express';

import {getCharacters, deleteCharacters,postCharacters, putCharacters, getOneCharacter} from '../controllers/characters.controller.js'

const router = Router()

router.get('/characters', getCharacters)

router.get('/characters/:id', getOneCharacter)

router.post('/characters', postCharacters)

router.put('/characters', putCharacters)

router.delete('/characters', deleteCharacters)

export default router;