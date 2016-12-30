/**
 * Created by iZel on 12/29/16.
 */

module.exports = (sequelize, DataTypes) => {
    const tramite = sequelize.define("tramite", {
        id_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_organizacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        codigo_tramite: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        codigo_tramite_ge: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre_tramite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion_tramite: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha_actualizacion_tramite:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'tramite',
            associate: (models) => {
                tramite.belongsTo(models.organizacion, { foreignKey: 'id_organizacion' });
                tramite.hasMany(models.tramite_poblacion_objeto, { foreignKey: 'id_tramite' });

                tramite.hasMany(models.requisito, { foreignKey: 'id_tramite' });

                tramite.hasMany(models.pasos, { foreignKey: 'id_tramite' });


                tramite.hasMany(models.tramite_categoria_tramite, { foreignKey: 'id_tramite' });


                tramite.hasMany(models.tramite_tipo_tramite, { foreignKey: 'id_tramite' });


                tramite.hasMany(models.tramite_forma_pago, { foreignKey: 'id_tramite' });


            },
        },
    });
    return tramite;
};
