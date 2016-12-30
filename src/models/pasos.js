/**
 * Created by iZel on 12/29/16.
 */
/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const pasos = sequelize.define("pasos", {
        id_paso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        orden_paso: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nombre_paso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion_paso: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'pasos',
            associate: (models) => {
            },
        },
    });
    return pasos;
};
