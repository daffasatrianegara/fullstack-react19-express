const { Router } = require('express');
const { UsersControllers } = require('../handlers');

const router = Router();

// check API
router.get('/', (req, res) => {
    res.status(200).json({
        status: 'Berhasil',
        message: 'Selamat datang di API',
    });
});

// users API
router.get('/users', UsersControllers.getAllUsersHandler);
router.get('/users/:id', UsersControllers.getDetailUserHandler);
router.post('/users', UsersControllers.addUserHandler);
router.put('/users/:id', UsersControllers.updateUserHandler);
router.delete('/users/:id', UsersControllers.deleteUserHandler);
// car API

module.exports = router;
