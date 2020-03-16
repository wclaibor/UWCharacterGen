//api.js
import * as cors from 'cors'
import * as express from 'express'
import { Character } from './models/character'
import { saveTempIcon } from './utils/saveTempIcon'
import { writeCharacterSheet } from './utils/writeCharacterSheet'

const router = express.Router()
const corsOptions: cors.CorsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

router.post('/createCharacter', cors(corsOptions), (req, res) => {
  // console.log(req);

  const character: Character = req.body.character

  saveTempIcon(req.body.icon)
  writeCharacterSheet(req.body.character)

  const fileName = `${character.characterInfo.name}-sheet.pdf`
  const pdfFilePath = `${__dirname}/../temp/${fileName}`
  res.download(pdfFilePath, fileName)
})

export default router
