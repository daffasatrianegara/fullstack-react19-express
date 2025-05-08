const { db } = require('../config');

const getDataForCardHandler = async (req, res) => {
    try {
        const [result1, metadata1] = await db.query(
            `SELECT count(id) AS total_users FROM users`,
        );
        const [result2, metadata2] = await db.query(
            `SELECT count(id) AS total_cars FROM cars`,
        );
        const [result3, metadata3] = await db.query(
            `SELECT count(id) AS total_new_users FROM users WHERE DATE("createdAt") = CURRENT_DATE`,
        );
        const [result4, metadata4] = await db.query(
            `SELECT count(id) AS total_new_cars FROM cars WHERE DATE("createdAt") = CURRENT_DATE`,
        );
        if (!result1[0] || !result2[0] || !result3[0] || !result4[0]) {
            return res.status(404).json({
                status: 'Gagal',
                message: 'Terdapat data yang tidak ditemukan...',
            });
        }

        res.status(200).json({
            status: 'Berhasil',
            message: 'Data informasi berhasil didapatkan...',
            data: {
                total_users: result1[0].total_users,
                total_cars: result2[0].total_cars,
                total_new_users: result3[0].total_new_users,
                total_new_cars: result4[0].total_new_cars,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
};

const getDataForBarChartHandler = async (req, res) => {
    try {
        const query = `
        WITH dates AS (
        SELECT generate_series(
            current_date - interval '6 day',
            current_date,
            interval '1 day'
        )::date AS day
        ),
        user_counts AS (
        SELECT DATE("createdAt") AS day, COUNT(*) AS count
        FROM users
        WHERE "createdAt" >= current_date - interval '6 day'
        GROUP BY day
        ),
        car_counts AS (
        SELECT DATE("createdAt") AS day, COUNT(*) AS count
        FROM cars
        WHERE "createdAt" >= current_date - interval '6 day'
        GROUP BY day
        )

        SELECT 
        to_char(d.day, 'FMDD Mon') AS date,
        COALESCE(u.count, 0) AS users,
        COALESCE(c.count, 0) AS cars
        FROM dates d
        LEFT JOIN user_counts u ON d.day = u.day
        LEFT JOIN car_counts c ON d.day = c.day
        ORDER BY d.day;
        `;

        const [result, metadata] = await db.query(query);
        if (result.length === 0) {
            return res.status(404).json({
                status: 'Gagal',
                message: 'Data tidak ditemukan...',
            });
        }

        res.status(200).json({
            status: 'Berhasil',
            message:
                'Data statistik pendaftaran pengguna dan kendaraan berhasil didapatkan...',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
};

const getDataForPieChartUsersHandler = async (req, res) => {
    try {
        const [result1, metadata1] = await db.query(
            `SELECT count(id) AS male FROM users WHERE gender='M'`,
        );
        const [result2, metadata2] = await db.query(
            `SELECT count(id) AS female FROM users WHERE gender='F'`,
        );
        if (!result1[0] || !result2[0]) {
            return res.status(404).json({
                status: 'Gagal',
                message: 'Data pengguna tidak ditemukan...',
            });
        }

        res.status(200).json({
            status: 'Berhasil',
            message:
                'Jumlah data pengguna berdasarkan jenis kelamin berhasil didapatkan...',
            data: {
                male_data: result1[0].male,
                female_data: result2[0].female,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
};

const getDataForPieChartCarsHandler = async (req, res) => {
    try {
        const [result, metadata] = await db.query(
            `SELECT brand, count(id) FROM cars GROUP BY brand ORDER BY count(id) DESC LIMIT 5`,
        );
        if (result.length === 0) {
            return res.status(404).json({
                status: 'Gagal',
                message: 'Data mobil tidak ditemukan...',
            });
        }

        res.status(200).json({
            status: 'Berhasil',
            message: 'Data jumlah merk mobil berhasil didapatkan...',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
};

module.exports = {
    getDataForCardHandler,
    getDataForBarChartHandler,
    getDataForPieChartUsersHandler,
    getDataForPieChartCarsHandler,
};
