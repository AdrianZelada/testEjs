'use strict';
import DataTypes from "sequelize/lib/data-types";
module.exports = {
  up: (queryInterface, Sequelize) =>
  queryInterface.createTable('tips_catalogo', {
    id_tipo_catalogo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },{
    freezeTableName: true,
    // define the table's name
    tableName: 'tipos_catalogo',
    classMethods: {
      associate: (models) => {
        tipos_catalogo.hasMany(models.catalogo, { as: 'children', foreignKey: 'id_tipo_catalogo' });
      },
    },
  }),
  down: (queryInterface, Sequelize)  =>
    queryInterface.dropTable('tips_catalogo'),
};
