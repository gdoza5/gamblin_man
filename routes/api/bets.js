const express = require('express');
const router = express.Router();
const betCtrl = require('../../controllers/bets');

router.post('/add', betCtrl.add)



module.exports = router;