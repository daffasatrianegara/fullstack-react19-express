const { UsersModels, CarsModels } = require('./models');
const { UsersSeeders, CarsSeeders } = require('./seeders');

const migrateTables = async () => {
    await UsersModels.sync({ force: true });
    await CarsModels.sync({ force: true });
};

const seedTables = async () => {
    await UsersSeeders();
    await CarsSeeders();
};

const migrateDb = async () => {
    try {
        await migrateTables();
        await seedTables();
        const response = {
            status: 'success',
            message: 'migrate table and seeding data successfully.',
        };
        console.log('\n', response, '\n');
    } catch (err) {
        console.log('Error migrating tables or seeding data:', err.message);
    }
};

migrateDb();
