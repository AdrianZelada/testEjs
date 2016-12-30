/**
 * Created by iZel on 12/29/16.
 */

module.exports = (sequelize, DataTypes) => {
    const tramite_categoria_tramite = sequelize.define("tramite_categoria_tramite", {
        id_tramite_categoria_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_categoria_tramite: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'tramite_categoria_tramite',
            associate: (models) => {
                tramite_categoria_tramite.belongsTo(models.categoria_tramite,{foreignKey:'id_categoria_tramite'});
            },
        },
    });
    return tramite_categoria_tramite;
};
