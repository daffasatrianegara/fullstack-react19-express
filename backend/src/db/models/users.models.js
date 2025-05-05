const { DataTypes } = require('sequelize');
const { db } = require('../../config');

module.exports = db.define("users", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM("M", "L"),
        allowNull: false,
        defaultValue: "M"
    }
})