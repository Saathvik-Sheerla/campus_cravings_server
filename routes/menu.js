// routes/menu.js
const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menuController');
const { authenticateToken, isAdmin } = require('../middleware/auth');

router.get('/', MenuController.getMenuItems);
router.get('/categories', MenuController.getCategories);
router.post('/', authenticateToken, isAdmin, MenuController.createMenuItem);
router.put('/:itemId', authenticateToken, isAdmin, MenuController.updateMenuItem);
router.delete('/:itemId', authenticateToken, isAdmin, MenuController.deleteMenuItem);

module.exports = router;