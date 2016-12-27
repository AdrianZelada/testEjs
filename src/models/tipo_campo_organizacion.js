
/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const tipo_campo_organizacion = sequelize.define("tipo_campo_organizacion", {
        id_tipo_campo_organizacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tipo_campo_organizacion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'tipo_campo_organizacion',
            associate: (models) => {
            },
        },
    });
    return tipo_campo_organizacion;
};

