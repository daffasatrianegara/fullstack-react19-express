const { Router } = require('express');

const router = Router();

// check API
router.get("/", (req, res) => {
    res.status(200).json({
        status: "Berhasil",
        message: "Selamat datang di API"
    })
})

// users API

// car API

module.exports = router;