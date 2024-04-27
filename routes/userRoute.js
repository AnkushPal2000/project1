const controller = require('../controllers/userController')
const express = require('express')
const router = express.Router();

router.post('/addUser', controller.addUser);
router.get('/getUser', controller.getUser);

module.exports = router;