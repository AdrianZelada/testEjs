'use strict';
import DataTypes from "sequelize/lib/data-types";
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('correspondencia', {
      id_correspondencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_dpa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_catalogo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      valor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fecha_datos: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },{
      classMethods: {
        freezeTableName: true,
        // define the table's name
        tableName: 'correspondencia',
        associate: (models) => {
          // associations can be defined here
          correspondencia.belongsTo(models.dpa, { as: 'parent', foreignKey: 'id_dpa' });
          correspondencia.belongsTo(models.catalogo, { as: 'parent', foreignKey: 'id_catalogo' });
        },
      },
    }
  ),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('correspondencia'),
};
