/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const lugar_pago = sequelize.define("lugar_pago", {
        id_lugar_pago: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_lugar_pago: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sigla_lugar_pago: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'lugar_pago',
            associate: (models) => {
            },
        },
    });
    return lugar_pago;
};

