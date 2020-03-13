//api.js
import * as cors from 'cors';
import * as express from 'express';
import { saveTempIcon } from './utils/saveTempIcon';
import { writeCharacterSheet } from './utils/writeCharacterSheet';

const router = express.Router();
var corsOptions: cors.CorsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

router.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

router.post('/createCharacter', cors(corsOptions), (req, res) => {
  // console.log(req);

  saveTempIcon(req.body.icon);
  writeCharacterSheet(req.body.character);

  res.send('hello world');
});

export default router;
