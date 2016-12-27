'use strict';
import DataTypes from "sequelize/lib/data-types";
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('tipos_dpa', {
      id_tipo_dpa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      id_tipo_dpa_superior: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },{
      freezeTableName: true,
      // define the table's name
      tableName: 'tipos_dpa',
      classMethods: {
        associate: (models) => {
          tipos_dpa.hasMany(models.tipos_dpa, { as: 'children', foreignKey: 'id_tipo_dpa_superior' });
          tipos_dpa.belongsTo(models.tipos_dpa, { as: 'parent', foreignKey: 'id_tipo_dpa_superior' });
          tipos_dpa.hasMany(models.dpa, { as: 'children', foreignKey: 'id_tipo_dpa' });
        },
      },
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('tipos_dpa'),
};
