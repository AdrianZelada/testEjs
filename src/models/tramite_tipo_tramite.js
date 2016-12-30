/**
 * Created by iZel on 12/29/16.
 */

module.exports = (sequelize, DataTypes) => {
    const tramite_tipo_tramite = sequelize.define("tramite_tipo_tramite", {
        id_tramite_tipo_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_tipo_tramite: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'tramite_tipo_tramite',
            associate: (models) => {
                tramite_tipo_tramite.belongsTo(models.tipo_tramite,{foreignKey:'id_tipo_tramite'});
            },
        },
    });
    return tramite_tipo_tramite;
};
