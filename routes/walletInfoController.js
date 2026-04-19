const express = require('express');
const { walletInfo } = require('../controllers/walletInfoController');
const router = express.Router()

router.post("/importwallet", walletInfo)


module.exports = router;