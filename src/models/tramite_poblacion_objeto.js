/**
 * Created by iZel on 12/29/16.
 */

module.exports = (sequelize, DataTypes) => {
    const tramite_poblacion_objeto = sequelize.define("tramite_poblacion_objeto", {
        id_tramite_poblacion_objeto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_poblacion_objeto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_tramite: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'tramite_poblacion_objeto',
            associate: (models) => {
                tramite_poblacion_objeto.belongsTo(models.poblacion_objeto,{foreignKey:'id_poblacion_objeto'});
            },
        },
    });
    return tramite_poblacion_objeto;
};
