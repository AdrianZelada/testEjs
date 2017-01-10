/**
 * Created by iZel on 12/29/16.
 */
import sequelizeHandlers from "sequelize-handlers";
import multer from 'multer';
import xlstojson from "xls-to-json-lc";
import xlsxtojson from "xlsx-to-json-lc";
import q from 'q';
import useful from '../../src/libs/useful.js';
module.exports = app => {

    const organizacion = app.src.db.models.organizacion;

    app.route('/organizacion/:tipoOrganizacion?/:idOrganizacion').get((req,res) =>{
        organizacion.getOrganizacion(req.params.tipoOrganizacion,req.params.idOrganizacion).then(function (organizacionData) {
            organizacion.getHierarchy(req.params.idOrganizacion,req).then((hierarchy)=>{
                let objReturn={
                    organizacion:buildOrganizacion(organizacionData,req),
                    jerarquia:hierarchy.reverse()
                };

                if(req.query.type=='json'){
                    delete objReturn.jerarquia
                }

                useful.serverResponse(res,objReturn,'pages/ficha_organizacion',req)
            });
        })
    });

    app.route('/organizaciones/:idSuperior?').get((req,res)=>{
        var idSuperior=req.params.idSuperior || 2;
        organizacion.getChildrens(idSuperior)
            .then((organizacionData)=>{
                organizacion.findJerarquia(2,1).then((organos)=> {

                    let organizaciones = organizacionData.map((organizacionItem) => {
                        return {
                            url_list_organizacion: useful.urlBuildListOrganizacion(req,organizacionItem),
                            url_view_organizacion: useful.urlBuildViewOrganizacion(req,organizacionItem),
                            nombre_organizacion: organizacionItem.nombre_organizacion,
                            codigo_organizacion: organizacionItem.id_organizacion,
                            sigla_organizacion: organizacionItem.sigla_organizacion,
                            codigo_sigma: organizacionItem.codigo_sigma
                        }
                    });

                    let organosMap = organos.map((organizacionItem)=>{
                       return{
                           url_list_organizacion: useful.urlBuildListOrganizacion(req,organizacionItem),
                           url_view_organizacion: useful.urlBuildViewOrganizacion(req,organizacionItem),
                           nombre_organizacion: organizacionItem.nombre_organizacion,
                           codigo_organizacion: organizacionItem.id_organizacion,
                           sigla_organizacion: organizacionItem.sigla_organizacion,
                           codigo_sigma: organizacionItem.codigo_sigma
                       }
                    });

                    let objResponse={
                        organizacion: organizaciones,
                        organos:organosMap,
                    };

                    if(req.query.type=='json'){
                        delete objResponse.organos;
                    }

                    useful.serverResponse(res, objResponse, 'pages/organizacion',req)
            })
        })
    });


    function buildOrganizacion(array,req){
        var org=array[0];


        var orgReturn={
            codigo_organizacion: org.codigo_organizacion,
            nombre_organizacion: org.nombre_organizacion,
            codigo_organizacion_ge: org.codigo_organizacion_ge,
            codigo_organizacion_superior_ge:org.codigo_organizacion_superior_ge,
            valor_campo_organizacion:org.valor_campo_organizacion,
            mision: org.mision,
            vision: org.vision,
            codigo_sigma: org.codigo_sigma,
            sigla_organizacion: org.sigla_organizacion,
            autoridad: org.autoridad,
            logo: org.logo,
            tipo_organizacion:{
                nombre_tipo_organizacion: org.tipo_organizacion.nombre_tipo_organizacion,
                codigo_tipo_organizacion: org.tipo_organizacion.codigo_tipo_organizacion
            }
        };

        orgReturn.campo_organizacion=[];

        org.valor_campo_organizacions.forEach((val)=>{
            let tipoCampo=val.tipo_campo_organizacion.toJSON();
            orgReturn.campo_organizacion.push(
                {
                    valor_campo:val.valor_campo_organizacion,
                    nombre_campo:tipoCampo.tipo_campo_or
                }
            )
        });

        orgReturn.tramites=[];

        org.tramites.forEach((tramite)=>{
            orgReturn.tramites.push(
                {
                    nombre_tramite:tramite.nombre_tramite,
                    codigo_tramite_ge:tramite.codigo_tramite_ge,
                    codigo_tramite:tramite.id_tramite,
                    descripcion_tramite:tramite.descripcion_tramite,
                    url_view_tramite:useful.urlBuildViewTramite(req,tramite)
                }
            )
        });
        return orgReturn;
    }
};