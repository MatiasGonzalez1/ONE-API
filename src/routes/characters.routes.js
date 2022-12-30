import {Router} from 'express';

import {getCharacters, deleteCharacters,postCharacters, pathCharacters, getOneCharacter} from '../controllers/characters.controller.js'

const router = Router()

router.get('/characters', getCharacters)

router.get('/characters/:id', getOneCharacter)

router.post('/characters', postCharacters)

router.patch('/characters/:id', pathCharacters)

router.delete('/characters/:id', deleteCharacters)

export default router;