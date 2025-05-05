const app = require('./server');
const { db, port, api } = require('./config');

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Database connected successfully');

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}${api}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        process.exit(1);
    }
};

startServer();
