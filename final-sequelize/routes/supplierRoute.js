const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.get('/', supplierController.renderSuppliers);
router.get('/add', supplierController.renderAdd);
router.post('/add', supplierController.addSuppliers);
router.get('/edit/:id', supplierController.renderEdit);
router.post('/edit/:id', supplierController.editSupplier);
router.get('/delete/:id', supplierController.deleteSupplier);

module.exports = router;
