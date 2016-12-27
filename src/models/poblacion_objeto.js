/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const poblacion_objeto = sequelize.define("poblacion_objeto", {
        id_poblacion_objeto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_poblacion_objeto: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'poblacion_objeto',
            associate: (models) => {
            },
        },
    });
    return poblacion_objeto;
};


