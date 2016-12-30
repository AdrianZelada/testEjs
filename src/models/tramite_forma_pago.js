
/**
 * Created by iZel on 12/24/16.
 */

module.exports = (sequelize, DataTypes) => {
    const tramite_forma_pago = sequelize.define("tramite_forma_pago", {
        id_tramite_forma_pago: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_forma_pago: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_tramite: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'tramite_forma_pago',
            associate: (models) => {
                tramite_forma_pago.hasMany(models.forma_pago, { foreignKey: 'id_forma_pago' });
            },
            getAll:()=>{
                return tramite_forma_pago.findAll()
            }
        },
    });
    return tramite_forma_pago;
};

