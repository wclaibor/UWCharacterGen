//api.js
import * as cors from 'cors';
import * as express from 'express';
const router = express.Router();
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
// our simple get /jobs API
router.get('/jobs', cors(corsOptions), (req, res) => {});

export default router;
