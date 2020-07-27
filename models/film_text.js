/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('film_text', {
		film_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'film_text'
	});
};
