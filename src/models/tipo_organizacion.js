/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const tipo_organizacion = sequelize.define("tipo_organizacion", {
        id_tipo_organizacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_tipo_organizacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo_tipo_organizacion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url_tipo_organizacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_superior_tipo_organizacion: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'tipo_organizacion',
            associate: (models) => {
                // tipo_organizacion.hasMany(models.organizacion, { as: 'children', foreignKey: 'id_tipo_dpa' });
            },
        },
    });
    return tipo_organizacion;
};


