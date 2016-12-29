/**
 * Created by iZel on 12/24/16.
 */

import q from 'q';

module.exports = (sequelize, DataTypes) => {
    const organizacion = sequelize.define("organizacion", {
        id_organizacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_organizacion_superior: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id_tipo_organizacion: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        codigo_organizacion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nombre_organizacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codigo_organizacion_ge: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        codigo_organizacion_superior_ge: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url_organizacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mision: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        vision: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sigla_organizacion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        autoridad: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },{
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            // definir el nombre de la tabla
            tableName: 'organizacion',
            associate: (models) => {
                organizacion.belongsTo(models.tipo_organizacion, { foreignKey: 'id_tipo_organizacion' });
                organizacion.hasMany(models.valor_campo_organizacion, { foreignKey: 'id_organizacion' });
            },

            getSchema:(models)=>{
                organizacion.describe().then(function(resp){
                    console.info(resp)
                });
                // console.log(organizacion.describe())
                // console.log(organizacion)
            },

            listAll:()=>{
                return _buildJoinOrganization()
            },

            searchOrganizacion:(paragraph)=>{
                var words=paragraph.split(" ").filter(function(word){
                    return word.length >=4 ;
                });

                var arrayLike=words.map(function (word) {
                    return '%'+word+'%'
                })
                words=words.concat(arrayLike);

                var where={
                    nombre_organizacion:{
                        $ilike:{
                            $any:words
                        }
                    }
                };

                return _buildJoinOrganization(where)
            },

            tipoOrganizacion:(type)=>{
                var whereType={
                    url:type
                };
                return _buildJoinOrganization({},whereType)
            },

            getOrganizacion:(urlType,urlOrg)=>{
                return _buildJoinOrganization({
                    url_organizacion:urlOrg,
                },{
                    url_tipo_organizacion:urlType
                })
            }
        },
    });

    function _buildJoinOrganization(where={},tipo_organizacion_where={},){
        let tipo_organizacion=sequelize.models.tipo_organizacion;
        let valor_campo_organizacion=sequelize.models.valor_campo_organizacion;
        let tipo_campo_organizacion=sequelize.models.tipo_campo_organizacion;

        return organizacion.findAll({
            include:[
                {
                    model:tipo_organizacion,
                    required:true,
                    as:'tipo_organizacion',
                    where:tipo_organizacion_where
                },
                {
                    model:valor_campo_organizacion,
                    required:true,
                    include:[
                        {
                            model:tipo_campo_organizacion,
                            required:true,
                        }
                    ],
                    attributes:['valor_campo_organizacion']
                }],
            where:where,
            attributes:['nombre_organizacion','codigo_organizacion_ge','url_organizacion']
        })
    }
    return organizacion;
};

