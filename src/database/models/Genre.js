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
    tableName: "actors",
    timestamps: false,
  };

  const Actor = sequelize.define("Actor", cols, config);
  return Actor;
};
