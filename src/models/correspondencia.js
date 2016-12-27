module.exports = (sequelize, DataTypes) => {
  const correspondencia = sequelize.define('correspondencia', {
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
    timestamps: false,
    freezeTableName: true,
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
  });
  return correspondencia;
};
