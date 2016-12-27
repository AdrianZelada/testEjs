
module.exports = (sequelize, DataTypes) => {
  const catalogo = sequelize.define("catalogo", {
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
    timestamps: false,
    freezeTableName: true,
    classMethods: {
      // definir el nombre de la tabla
      tableName: 'catalogo',
      associate: (models) => {
        catalogo.hasMany(models.correspondencia, { as: 'children', foreignKey: 'id_catalogo' });
        catalogo.belongsTo(models.tipos_catalogo, { as: 'parent', foreignKey: 'id_tipo_catalogo' });
      },
    },
  });
  return catalogo;
};
