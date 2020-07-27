module.exports = function (sequelize, DataTypes) {
  var Film = sequelize.define("Film", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    film_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    film_genre: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });

  return Film;
};