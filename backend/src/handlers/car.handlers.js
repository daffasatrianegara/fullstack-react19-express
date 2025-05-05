const { CarsModels } = require('../db/models');
const { db } = require('../config');

const getAllCarsHandler = async (req, res) => {
    const { keywords, sort } = req.query;
    try {
        let query = `
        SELECT id, brand, owner_name, plate_number, color FROM cars`;

        if (keywords) {
            query += `
            WHERE brand LIKE :keywords OR owner_name LIKE :keywords OR plate_number LIKE :keywords OR color LIKE :keywords
            `;
        }

        if (sort === 'asc') {
            query += `
            ORDER BY id ASC
            `;
        } else if (sort === 'desc') {
            query += `
            ORDER BY id DESC
            `;
        } else {
            query += `
            ORDER BY id ASC
            `;
        }

        const [result, metadata] = await db.query(query, {
            replacements: { keywords: `%${keywords}%` },
        });

        if (result.length === 0) {
            return res.status(404).json({
                status: 'Gagal',
                message: 'Data mobil tidak ditemukan...',
            });
        }

        res.status(200).json({
            status: 'Berhasil',
            message: 'Data mobil berhasil didapatkan...',
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
};

const getDetailCarHandler = async (req, res) => {
    const { id } = req.params;
    try {
        if(!id) {
            return res.status(400).json({
                status: 'Gagal',
                message: 'ID mobil tidak boleh kosong...',
            });
        }

        const getData = await CarsModels.findByPk(id)
        if(!getData) {
            return res.status(404).json({
                status: 'Gagal',
                message: 'Data mobil tidak ditemukan...',
            });
        }

        res.status(200).json({
            status: 'Berhasil',
            message: 'Data mobil berhasil didapatkan...',
            data: getData,
        }); 
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
};

const addCarHandler = async (req, res) => {
    const { owner_name, brand, plate_number, color } = req.body
    try {
        if(!owner_name || !brand || !plate_number || !color) {
            return res.status(400).json({
                status: 'Gagal',
                message: 'Semua field harus diisi...',
            });
        }

        const isPlateNumberExist = await CarsModels.findOne({
            where: {
                plate_number
            }
        })

        if(isPlateNumberExist) {
            return res.status(409).json({
                status: 'Gagal',
                message: 'Nomor plat sudah terdaftar...',
            });
        }

        const addData = await CarsModels.create({
            owner_name,
            brand,
            plate_number,
            color
        })

        res.status(201).json({
            status: 'Berhasil',
            message: 'Data mobil berhasil ditambahkan...',
            data: addData,
        });
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
}

const updateCarHandler = async (req, res) => {
    const { id } = req.params
    const { owner_name, brand, plate_number, color } = req.body
    try {
        if(!id || !owner_name || !brand || !plate_number || !color) {
            return res.status(400).json({
                status: 'Gagal',
                message: 'Semua field harus diisi...',
            });
        }

        const isCarExist = await CarsModels.findByPk(id)
        if(!isCarExist) {
            return res.status(404).json({
                status: 'Gagal',
                message: 'Data mobil tidak ditemukan...',
            });
        }

        if(isCarExist.plate_number === plate_number && isCarExist.id !== id) {
            return res.status(409).json({
                status: 'Gagal',
                message: 'Nomor plat sudah terdaftar...',
            });
        }

        await CarsModels.update({
            owner_name,
            brand,
            plate_number,
            color
        }, {
            where: {
                id
            }
        })

        res.status(200).json({
            status: 'Berhasil',
            message: 'Data mobil berhasil diupdate...',
        });
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
}

const deleteCarHandler = async (req, res) => {
    const { id } = req.params
    try {
        if(!id) {
            return res.status(400).json({
                status: 'Gagal',
                message: 'ID mobil tidak boleh kosong...',
            });
        }

        const isCarExist = await CarsModels.findByPk(id)
        if(!isCarExist) {
            return res.status(404).json({
                status: 'Gagal',
                message: 'Data mobil tidak ditemukan...',
            });
        }

        await CarsModels.destroy({
            where: { id }
        })

        res.status(200).json({
            status: 'Berhasil',
            message: 'Data mobil berhasil dihapus...',
        }); 
    } catch (err) {
        res.status(500).json({
            status: 'Gagal',
            message: err.message,
        });
    }
}

module.exports = {
    getAllCarsHandler,
    getDetailCarHandler,
    addCarHandler,
    updateCarHandler,
    deleteCarHandler
};

