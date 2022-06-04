module.exports = (sequelize, DataTypes) => {
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    ranking: {
      type: DataTypes.DECIMAL(3, 1),
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
  };

  let config = {
    tableName: "genres",
    timestamps: false,
  };

  const Genre = sequelize.define("Genre", cols, config);
  return Genre;
};
