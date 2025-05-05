const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "123",
  database: process.env.DB_NAME,
  timezone: "+07:00",
});

const port = parseInt(process.env.PORT_APP) || 3000;
const api = process.env.PATH_API || "api/v1";

module.exports = {
  db,
  port,
  api
};
