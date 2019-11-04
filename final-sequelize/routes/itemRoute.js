const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.renderItems);
router.get('/add', itemController.renderAdd);
router.post('/add', itemController.addItems);
router.get('/edit/:id', itemController.renderEdit);
router.post('/edit/:id', itemController.editItem);
router.get('/delete/:id', itemController.deleteItem);

module.exports = router;

module.exports = router;
