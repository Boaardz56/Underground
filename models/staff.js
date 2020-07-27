/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('staff', {
		staff_id: {
			autoIncrement: true,
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		first_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		last_name: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		address_id: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'address',
				},
				key: 'address_id'
			}
		},
		picture: {
			type: 'BLOB',
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: true
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
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		},
		username: {
			type: DataTypes.STRING(16),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(40),
			allowNull: true
		},
		last_update: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		tableName: 'staff'
	});
};
