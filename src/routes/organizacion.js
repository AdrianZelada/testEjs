/**
 * Created by iZel on 12/29/16.
 */
import sequelizeHandlers from "sequelize-handlers";
import multer from 'multer';
import xlstojson from "xls-to-json-lc";
import xlsxtojson from "xlsx-to-json-lc";
import q from 'q';
import util from '../../src/libs/useful.js';
module.exports = app => {

    const organizacion = app.src.db.models.organizacion;

    app.route('/organizacion/:tipoOrganizacion/:idOrganizacion').get((req,res) =>{
        organizacion.getOrganizacion(req.params.tipoOrganizacion,req.params.idOrganizacion).then(function (organizacionData) {
            organizacion.getHierarchy(req.params.idOrganizacion,req).then((hierarchy)=>{

                util.serverResponse(res,{
                    organizacion:buildOrganizacion(organizacionData,req),
                    jerarquia:hierarchy
                },'pages/vist')
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
                            url_list_organizacion: req.protocol + '://' + req.get('host') + '/organizaciones/' + organizacionItem.id_organizacion,
                            url_view_organizacion: req.protocol + '://' + req.get('host') + '/organizacion/' + organizacionItem.tipo_organizacion.url_tipo_organizacion + '/' + organizacionItem.id_organizacion,
                            nombre_organizacion: organizacionItem.nombre_organizacion,
                            codigo_organizacion: organizacionItem.id_organizacion,
                            sigla_organizacion: organizacionItem.sigla_organizacion,
                            codigo_sigma: organizacionItem.codigo_sigma
                        }
                    });

                    let organosMap = organos.map((organizacionItem)=>{
                       return{
                           url_list_organizacion: req.protocol + '://' + req.get('host') + '/organizaciones/' + organizacionItem.id_organizacion,
                           url_view_organizacion: req.protocol + '://' + req.get('host') + '/organizacion/' + organizacionItem.tipo_organizacion.url_tipo_organizacion + '/' + organizacionItem.id_organizacion,
                           nombre_organizacion: organizacionItem.nombre_organizacion,
                           codigo_organizacion: organizacionItem.id_organizacion,
                           sigla_organizacion: organizacionItem.sigla_organizacion,
                           codigo_sigma: organizacionItem.codigo_sigma
                       }
                    });

                    util.serverResponse(res, {
                        path: req.protocol + '://' + req.get('host'),
                        pathOrganizacion: req.protocol + '://' + req.get('host') + '/organizacion',
                        organizacion: organizaciones,
                        organos:organosMap
                    }, '')
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
                    url_view_tramite:req.protocol + '://' + req.get('host') +'/tramite/'+tramite.id_tramite
                }
            )
        });
        return orgReturn;
    }
};