/**
 * Created by iZel on 12/29/16.
 */

module.exports = (sequelize, DataTypes) => {
    const forma_pago = sequelize.define("forma_pago", {
        id_forma_pago: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_lugar_pago: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_moneda: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        costo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nombre_cuenta: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        numero_cuenta: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'forma_pago',
            associate: (models) => {
                forma_pago.belongsTo(models.lugar_pago,{foreignKey:'id_lugar_pago'});
                forma_pago.belongsTo(models.moneda,{foreignKey:'id_moneda'});
            },
        },
    });
    return forma_pago;
};
