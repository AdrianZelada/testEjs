/**
 * Created by iZel on 12/29/16.
 */
/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const requisito = sequelize.define("requisito", {
        id_requisito: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_tramite_requisito: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nombre_requisito: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        papel_original: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        papel_fotocopia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        papel_fotocopia_legalizada: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'requisito',
            associate: (models) => {
            },
        },
    });
    return requisito;
};
