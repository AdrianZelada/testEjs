/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const tipo_tramite = sequelize.define("tipo_tramite", {
        id_tipo_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_tipo_tramite: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo_tipo_tramite: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url_tipo_tramite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo_tipo_tramite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        clase_tipo_tramite: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'tipo_tramite',
            associate: (models) => {
            },
        },
    });
    return tipo_tramite;
};
