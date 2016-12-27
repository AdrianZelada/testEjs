module.exports = (sequelize, DataTypes) => {
  const tipos_catalogo = sequelize.define('tipos_catalogo', {
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
    timestamps: false,
    freezeTableName: true,
    // define the table's name
    tableName: 'tipos_catalogo',
    classMethods: {
      associate: (models) => {
        tipos_catalogo.hasMany(models.catalogo, { as: 'children', foreignKey: 'id_tipo_catalogo' });
      },
    },
  });
  return tipos_catalogo;
};
