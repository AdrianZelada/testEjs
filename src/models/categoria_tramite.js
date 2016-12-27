/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const categoria_tramite = sequelize.define("categoria_tramite", {
        id_categoria_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_categoria_tramite: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo_categoria_tramite: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url_categoria_tramite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo_categoria_tramite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion_categoria_tramite: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'categoria_tramite',
            associate: (models) => {
            },
        },
    });
    return categoria_tramite;
};

