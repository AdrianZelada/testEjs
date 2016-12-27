/**
 * Created by iZel on 12/26/16.
 */
/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const valor_campo_organizacion = sequelize.define("valor_campo_organizacion", {
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
            tableName: 'valor_campo_organizacion',
            associate: (models) => {
                valor_campo_organizacion.belongsTo(models.tipo_campo_organizacion,{foreignKey:'id_tipo_campo_organizacion'})
            },
        },
    });
    return valor_campo_organizacion;
};

