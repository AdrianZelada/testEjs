'use strict';
import DataTypes from "sequelize/lib/data-types";
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('catalogo', {
      id_catalogo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      detalle: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      fuente: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id_tipo_catalogo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },{
      classMethods: {
        freezeTableName: true,
        // definir el nombre de la tabla
        tableName: 'catalogo',
        associate: (models) => {
          catalogo.hasMany(models.correspondencia, { as: 'children', foreignKey: 'id_catalogo' });
          catalogo.belongsTo(models.tipos_catalogo, { as: 'parent', foreignKey: 'id_tipo_catalogo' });
        },
      },
    }

  ),
  down: (queryInterface, Sequelize)  =>
    queryInterface.dropTable('catalogo'),

};
