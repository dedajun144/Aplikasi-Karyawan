import { Sequelize } from "sequelize";

const db = new Sequelize("karyawan_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
