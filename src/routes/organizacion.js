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
    const dpa = app.src.db.models.dpa;
    const tipo_dpa = app.src.db.models.tipos_dpa;
    const lugar_pago = app.src.db.models.lugar_pago;
    const moneda = app.src.db.models.moneda;
    const tipo_tramite = app.src.db.models.tipo_tramite;
    const categoria_tramite = app.src.db.models.categoria_tramite;
    const poblacion_objeto = app.src.db.models.poblacion_objeto;
    const tipo_organizacion = app.src.db.models.tipo_organizacion;
    const organizacion = app.src.db.models.organizacion;

    app.route('/organizacion/:tipoOrganizacion/:idOrganizacion').get((req,res) =>{
        organizacion.getOrganizacion(req.params.tipoOrganizacion,req.params.idOrganizacion).then(function (organizacionData) {
            organizacion.getHierarchy(req.params.idOrganizacion,req).then((hierarchy)=>{
                util.serverResponse(res,{
                    // path:req.protocol + '://' + req.get('host'),
                    // pathOrganizacion:req.protocol + '://' + req.get('host') +'/organizacion',
                    // organizacion:organizacionData,
                    organizacion:buildOrganizacion(organizacionData),
                    jerarquia:hierarchy
                },'pages/vist')
            });
        })
    });

    //
    // app.route('/organizacion/jerarquia/:jerarquia/:idOrganizacion').get((req,res)=>{
    //     organizacion.findJerarquia(req.params.jerarquia,req.params.idOrganizacion).then((jerarquiaData)=>{
    //         console.log(jerarquiaData)
    //         res.json({
    //             pathJerarquia:req.protocol + '://' + req.get('host') +'/organizacion/jerarquia',
    //             jerarquia_organizacion:jerarquiaData
    //         });
    //         // res.render('pages/busqueda', {
    //         //     path:req.protocol + '://' + req.get('host'),
    //         //     pathOrganizacion:req.protocol + '://' + req.get('host') +'/organizacion',
    //         //     pathOrganizacion:req.protocol + '://' + req.get('host') +'/organizacion',
    //         //     organizacion:resultOrg,
    //         //     jerarquia_organizacion:jerarquiaData
    //         // });
    //     });
    //
    // });


    app.route('/organizaciones/:idSuperior?').get((req,res)=>{
        var idSuperior=req.params.idSuperior || 2;
        organizacion.getChildrens(idSuperior)
            .then((organizacionData)=>{

                let organizaciones=organizacionData.map((organizacionItem)=> {
                    return {
                        url_list_organizacion:req.protocol + '://' + req.get('host') +'/organizaciones/'+organizacionItem.id_organizacion,
                        url_view_organizacion:req.protocol + '://' + req.get('host') +'/organizacion/'+organizacionItem.tipo_organizacion.url_tipo_organizacion+'/'+organizacionItem.id_organizacion,
                        nombre_organizacion:organizacionItem.nombre_organizacion,
                        codigo_organizacion:organizacionItem.id_organizacion,
                        sigla_organizacion:organizacionItem.sigla_organizacion,
                        codigo_sigma:organizacionItem.codigo_sigma,
                        // tramites:organizacionItem.tramites
                    }
                });

                util.serverResponse(res,{
                    path:req.protocol + '://' + req.get('host'),
                    pathOrganizacion:req.protocol + '://' + req.get('host') +'/organizacion',
                    organizacion:organizaciones
                },'')
        })
    });

    // app.route('/getJerarquia').get((req,res)=>{
    //     organizacion.getHierarchy(3).then((hierarchy)=>{
    //         util.serverResponse(res,{
    //             path:req.protocol + '://' + req.get('host'),
    //             pathOrganizacion:req.protocol + '://' + req.get('host') +'/organizacion',
    //             jerarquia:hierarchy
    //         },'')
    //     });
    // })

    function buildOrganizacion(array){
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
            },
            tramites:org.tramites
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


        // var valorDatos=array[0].valor_campo_organizacions.map(function (orgData) {
        //
        //
        //     org=orgData.valor_campo_organizacion.JSON();
        //
        //     return{
        //         valor_campo_organizacion:org.valor_campo_organizacion,
        //         tipo_campo_organizacion:org.tipo_campo_organizacion
        //     }
        // });
        // array[0].valor_campo_organizacions=org;
        return orgReturn;
    }
};