/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('film_actor', {
		actor_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: {
					tableName: 'actor',
				},
				key: 'actor_id'
			}
		},
		film_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: {
					tableName: 'film',
				},
				key: 'film_id'
			}
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'film_actor'
	});
};
