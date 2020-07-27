/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('actor_info', {
		actor_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			defaultValue: 0
		},
		first_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		film_info: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		sequelize,
		tableName: 'actor_info'
	});
};
