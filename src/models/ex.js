module.exports = (sequelize, DataTypes) => {
    const ex = sequelize.define("ex", {

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
    },
    {
      classMethods: {
        freezeTableName: true,
        // definir el nombre de la tabla
        tableName: 'ex',
        associate: (models) => {
          ex.hasMany(models.correspondencia, { as: 'children', foreignKey: 'id_catalogo' });
          ex.belongsTo(models.tipos_catalogo, { as: 'parent', foreignKey: 'id_tipo_catalogo' });
        },
      },
    }
  );
  return ex;
};
