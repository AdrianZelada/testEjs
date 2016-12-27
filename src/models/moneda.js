/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const moneda = sequelize.define("moneda", {
        id_moneda: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_moneda_ge: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sigla_moneda: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nombre_moneda: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'moneda',
            associate: (models) => {
            },
        },
    });
    return moneda;
};
