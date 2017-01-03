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
            allowNull: true,
        },
        nombre_tramite: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        descripcion_tramite: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        duracion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fecha_actualizacion:{
            type: DataTypes.STRING,
            allowNull: true,
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


                tramite.hasMany(models.forma_pago, { foreignKey: 'id_tramite' });
            },

            getTranscForCategory: (idCategory)=> {
// console.log(idCategory)
                var idCategoriaWhere={
                    id_categoria_tramite:idCategory
                }


                return _buildJoinOrganization({},idCategoriaWhere);
            },

            getOneTransc:(idTransc)=>{
                var where={
                    id_tramite:idTransc
                }
                return _buildJoinOrganization(where);
            },

            searchTramite:(paragraph)=>{
                var words=paragraph.split(" ").filter(function(word){
                    return word.length >=3 ;
                });

                var arrayLike=words.map(function (word) {
                    return '%'+word+'%'
                });
                words=words.concat(arrayLike);
                console.log(words)
                var where={
                    $or:{
                        nombre_tramite:{
                            $ilike:{
                                $any:words
                            }
                        },
                        descripcion_tramite:{
                            $ilike:{
                                $any:words
                            }
                        }
                    }
                };

                return _buildJoinOrganization(where)
            },

            getAllTransc:()=>{
                return _buildJoinOrganization({});
            }
        },
    });

    function _buildJoinOrganization(where={},tramite_categoria_where={},categoria_where={}){
        const tramite_categoria_tramite = sequelize.models.tramite_categoria_tramite;
        const categoria_tramite = sequelize.models.categoria_tramite;
        const requisito = sequelize.models.requisito;
        const forma_pago = sequelize.models.forma_pago;
        const pasos = sequelize.models.pasos;
        const lugar_pago = sequelize.models.lugar_pago;
        const moneda = sequelize.models.moneda;
        const tramite_poblacion_objeto = sequelize.models.tramite_poblacion_objeto;
        const poblacion_objeto = sequelize.models.poblacion_objeto;
        const organizacion = sequelize.models.organizacion;
        const tipo_organizacion=sequelize.models.tipo_organizacion;


        console.log(categoria_where)
        return tramite.findAll({
            include:[
                {
                    model:tramite_categoria_tramite,
                    required:true,
                    include:[
                        {
                            model:categoria_tramite,
                            required:true,
                            where:categoria_where
                        }
                    ],
                    where:tramite_categoria_where

                },
                {
                    model:requisito,
                },
                {
                    model:pasos,
                    // required:true,
                },
                {
                    model:forma_pago,
                    // required:true,
                    include:[
                        {
                            model:lugar_pago,
                            // required:true,
                        },
                        {
                            model:moneda,
                            // required:true,
                        }
                    ]
                },
                {
                    model:tramite_poblacion_objeto,
                    // required:true,
                    include:[
                        {
                            model:poblacion_objeto,
                            // required:true
                        }
                    ]
                },
                {
                    model:organizacion,
                    required:true,
                    include:[
                        {
                            model: tipo_organizacion,
                            required: true
                        }
                    ]
                }
            ],
            where:where,
        })
    }
    return tramite;
};
