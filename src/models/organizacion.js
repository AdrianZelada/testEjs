/**
 * Created by iZel on 12/24/16.
 */

import q from 'q';
import useful from '../../src/libs/useful.js';


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
        codigo_sigma: {
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
                organizacion.hasMany(models.tramite, { foreignKey: 'id_organizacion' });
            },

            getSchema:(models)=>{
                organizacion.describe().then(function(resp){
                    console.info(resp)
                });
            },

            listAll:()=>{
                return _buildJoinOrganization()
            },

            searchOrganizacion:(paragraph)=>{
                var newparagraph=paragraph.toLowerCase()

                console.log(newparagraph)

                var words=newparagraph.split(" ").filter(function(word){
                    return word.length >=4 ;
                });

                var arrayLike=words.map(function (word) {
                    return '%'+word+'%'
                });

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

            tipoOrganizacion:(id_tipo_organizacion)=>{
                var where={
                    id_tipo_organizacion:id_tipo_organizacion
                };
                return _buildJoinOrganization(where)
            },

            getChildrens:(id_superior)=>{
                var where={
                    id_organizacion_superior:id_superior
                };
                return _buildJoinOrganization(where)
            },

            getOrganizacion:(urlType=1,idOrg)=>{
                return _buildJoinOrganization({
                    id_organizacion:idOrg,
                },{
                    url_tipo_organizacion:urlType
                })
            },

            getHierarchy:function(idOrganizacion,req){
                var hierarchy=[];
                var defer = q.defer();
                _getHierarchy(idOrganizacion,hierarchy,(hierarchyData)=>{

                    defer.resolve(hierarchyData.map((org)=>{
                        return{
                            codigo_organizacion: org.codigo_organizacion,
                            nombre_organizacion: org.nombre_organizacion,
                            codigo_organizacion_ge: org.codigo_organizacion_ge,
                            url_view_organizacion:useful.urlBuildViewOrganizacion(req,org)
                        }
                    }));
                });
                return defer.promise;
            },

            findJerarquia:(jerarquia,idOrganizacion)=>{
                let tipo_organizacion=sequelize.models.tipo_organizacion;

                return organizacion.findAll({
                    include:[
                        {
                            model:tipo_organizacion,
                            required:true,
                            as:'tipo_organizacion',
                            where:{
                                jerarquia:jerarquia
                            }
                        }
                    ],
                    where:{
                        id_organizacion_superior:idOrganizacion
                    }
                })
            }
        },
    });

    function _getHierarchy(idOrganizacion,hierarchy,fn){
        let tipo_organizacion=sequelize.models.tipo_organizacion;
        organizacion.findOne({
           where:{
               id_organizacion:idOrganizacion
           },
            include:[
                {
                    model:tipo_organizacion,
                    required:true,
                    as:'tipo_organizacion'
                }
            ]
       }).then((organizacionData)=>{
           if(organizacionData.id_organizacion_superior != 0 ){
               _getHierarchy(organizacionData.id_organizacion_superior,hierarchy,fn);
               hierarchy.push(organizacionData);
           }else{
               hierarchy.push(organizacionData);
               fn(hierarchy);
           }
       })
    }



    function _buildJoinOrganization(where={},tipo_organizacion_where={}){
        let tipo_organizacion=sequelize.models.tipo_organizacion;
        let valor_campo_organizacion=sequelize.models.valor_campo_organizacion;
        let tipo_campo_organizacion=sequelize.models.tipo_campo_organizacion;
        let tramite=sequelize.models.tramite;

        return organizacion.findAll({
            include:[
                {
                    model:tipo_organizacion,
                    required:true,
                    as:'tipo_organizacion',
                    // where:tipo_organizacion_where
                },
                {
                    model:valor_campo_organizacion,
                    // required:true,
                    include:[
                        {
                            model:tipo_campo_organizacion,
                            // required:true,
                        }
                    ],
                },
                {
                    model:tramite,
                    // required:true,
                }
            ],
            where:where,
        })
    }
    return organizacion;
};

