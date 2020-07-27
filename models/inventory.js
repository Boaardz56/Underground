/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('inventory', {
		inventory_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		film_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'film',
				},
				key: 'film_id'
			}
		},
		store_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'store',
				},
				key: 'store_id'
			}
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'inventory'
	});
};
