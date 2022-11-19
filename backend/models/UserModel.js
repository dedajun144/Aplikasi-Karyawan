import { Sequelize } from "sequelize";

import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    nik: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    umur: DataTypes.INTEGER,
    jenis_kelamin: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    alamat: DataTypes.STRING,
    negara: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
