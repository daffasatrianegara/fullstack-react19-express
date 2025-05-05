const { DataTypes } = require('sequelize');
const { db } = require('../../config');

module.exports = db.define(
    'cars',
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        owner_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        plate_number: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true,
        },
        color: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    },
    {
        tableName: 'cars',
        freezeTableName: true,
        timestamps: true,
    },
);
