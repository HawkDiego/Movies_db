const { DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

let cols = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(500),
  },
  rating: {
    type: DataTypes.DECIMAL(3, 1),
  },
  awards: {
    type: DataTypes.INTEGER,
  },
  relase_date: {
    type: DataTypes.DATE,
  },
};

let config = {
    tableName: "movies",
    timestamps: false
}

const Movies = sequelize.define('Movie', cols, config);
