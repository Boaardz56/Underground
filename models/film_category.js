/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('film_category', {
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
		category_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			references: {
				model: {
					tableName: 'category',
				},
				key: 'category_id'
			}
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'film_category'
	});
};
