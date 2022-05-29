module.exports = (sequelize, DataTypes) => {
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
    release_date: {
      type: DataTypes.DATE,
    },
  };

  let config = {
    tableName: "movies",
    timestamps: false,
  };

  const Movie = sequelize.define("Movie", cols, config);
  return Movie;
};
