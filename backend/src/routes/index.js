const { Router } = require('express');
const {
    UsersControllers,
    CarsControllers,
    StatisticsControllers,
} = require('../handlers');

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
router.get('/cars', CarsControllers.getAllCarsHandler);
router.get('/cars/:id', CarsControllers.getDetailCarHandler);
router.post('/cars', CarsControllers.addCarHandler);
router.put('/cars/:id', CarsControllers.updateCarHandler);
router.delete('/cars/:id', CarsControllers.deleteCarHandler);

// statistics API
router.get(
    '/statistics/card-info',
    StatisticsControllers.getDataForCardHandler,
);
router.get(
    '/statistics/users-cars',
    StatisticsControllers.getDataForBarChartHandler,
);
router.get(
    '/statistics/gender',
    StatisticsControllers.getDataForPieChartUsersHandler,
);
router.get(
    '/statistics/car-brand',
    StatisticsControllers.getDataForPieChartCarsHandler,
);

module.exports = router;
