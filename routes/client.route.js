const express = require('express');
const controller = require('../controllers/client.controller');

const router = express.Router();
const clientController = require('../controllers/client.controller');

router.get('/', clientController.getAll);
router.post('/add',clientController.save);
router.get('/delete/:id',clientController.delete)
//This brings up the form to edit form
router.get('/edit/:id', clientController.edit);
//This update and save
router.post('/update/:id',clientController.update);
module.exports = router;