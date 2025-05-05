const { UsersModels } = require("../db/models");
const { db } = require("../config");

const getAllUsersHandler = async (req, res) => {
  const { keywords, sort } = req.query;
  try {
    let query = `
        SELECT id, email, username, gender FROM users
        `;

    console.log(keywords);
    if (keywords) {
      query += `
            WHERE username LIKE :keywords OR email LIKE :keywords
            `;
    }

    if (sort === "asc") {
      query += `
            ORDER BY "createdAt" ASC
            `;
    } else if (sort === "desc") {
      query += `
            ORDER BY "createdAt" DESC
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
        status: "Gagal",
        message: "Data pengguna tidak ditemukan...",
      });
    }

    res.status(200).json({
      status: "Berhasil",
      message: "Data pengguna ditemukan...",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      status: "Gagal",
      message: err.message,
    });
  }
};

const getDetailUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        status: "Gagal",
        message: "ID pengguna tidak ditemukan...",
      });
    }

    const getUser = await UsersModels.findByPk(id);
    if (!getUser) {
      return res.status(404).json({
        status: "Gagal",
        message: "Pengguna tidak ditemukan...",
      });
    }

    res.status(200).json({
      status: "Berhasil",
      message: "Data pengguna ditemukan...",
      data: getUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "Gagal",
      message: err.message,
    });
  }
};

const addUserHandler = async (req, res) => {
  const { username, email, gender } = req.body;
  try {
    if (!username || !email || !gender) {
      return res.status(400).json({
        status: "Gagal",
        message: "Semua data harus diisi...",
      });
    }

    if (gender !== "M" && gender !== "F") {
      return res.status(400).json({
        status: "Gagal",
        message: "Format jenis kelamin salah...",
      });
    }

    const isEmailExist = await UsersModels.findOne({
      where: {
        email: email,
      },
    });

    if (isEmailExist) {
      return res.status(409).json({
        status: "Gagal",
        message: "Email sudah terdaftar...",
      });
    }

    const addUsers = await UsersModels.create({
      username,
      email,
      gender,
    });

    res.status(201).json({
      status: "Berhasil",
      message: "Data pengguna berhasil ditambahkan...",
      data: addUsers,
    });
  } catch (err) {
    res.status(500).json({
      status: "Gagal",
      message: err.message,
    });
  }
};

const updateUserHandler = async (req, res) => {
  const { id } = req.params;
  const { username, email, gender } = req.body;
  try {
    if (!id || !username || !email || !gender) {
      return res.status(400).json({
        status: "Gagal",
        message: "Semua data harus diisi...",
      });
    }

    if (gender !== "M" && gender !== "F") {
      return res.status(400).json({
        status: "Gagal",
        message: "Format jenis kelamin salah...",
      });
    }

    const isEmailExist = await UsersModels.findOne({
      where: {
        email,
      },
    });

    if (isEmailExist && isEmailExist.id !== id) {
      return res.status(409).json({
        status: "Gagal",
        message: "Email sudah terdaftar...",
      });
    }

    const isUserExist = await UsersModels.findByPk(id);
    if (!isUserExist) {
      return res.status(404).json({
        status: "Gagal",
        message: "Data pengguna tidak ditemukan...",
      });
    }

    await UsersModels.update(
      {
        email,
        username,
        gender,
      },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      status: "Berhasil",
      message: "Data pengguna berhasil diupdate...",
    });
  } catch (err) {
    res.status(500).json({
      status: "Gagal",
      message: err.message,
    });
  }
};

const deleteUserHandler = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(400).json({
        status: "Gagal",
        message: "ID pengguna tidak ditemukan...",
      });
    }

    const isUserExist = await UsersModels.findByPk(id);
    if (!isUserExist) {
      return res.status(404).json({
        status: "Gagal",
        message: "Data pengguna tidak ditemukan...",
      });
    }

    await UsersModels.destroy({
      where: { id },
    });

    res.status(200).json({
      status: "Berhasil",
      message: "Data pengguna berhasil dihapus...",
    });
  } catch (err) {
    res.status(500).json({
      status: "Gagal",
      message: err.message,
    });
  }
};

module.exports = {
  getAllUsersHandler,
  getDetailUserHandler,
  addUserHandler,
  updateUserHandler,
  deleteUserHandler
};
