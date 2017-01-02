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

    app.route('/organizacion/:tipo_organizacion/:id_organizacion').get((req,res) =>{
        organizacion.getOrganizacion(req.params.tipo_organizacion,req.params.id_organizacion).then(function (organizacionData) {
            util.serverResponse(res,{
                organizacion:organizacionData
            },'pages/vist')
        })
    });

    app.route('/organizacion/jerarquia/:jerarquia/:idOrganizacion').get((req,res)=>{
        organizacion.findJerarquia(req.params.jerarquia,req.params.idOrganizacion).then((jerarquiaData)=>{
            console.log(jerarquiaData)
            res.json({
                pathJerarquia:req.protocol + '://' + req.get('host') +'/organizacion/jerarquia',
                jerarquia_organizacion:jerarquiaData
            });
            // res.render('pages/busqueda', {
            //     path:req.protocol + '://' + req.get('host'),
            //     pathOrganizacion:req.protocol + '://' + req.get('host') +'/organizacion',
            //     pathOrganizacion:req.protocol + '://' + req.get('host') +'/organizacion',
            //     organizacion:resultOrg,
            //     jerarquia_organizacion:jerarquiaData
            // });
        });

    });

    app.route('/entidades').get((req,res)=>{
        organizacion.findAll({
            where:{
                id_tipo_organizacion:3
            }
        }).then((organizacionData)=>{
            util.serverResponse(res,{
                path:req.protocol + '://' + req.get('host'),
                pathOrganizacion:req.protocol + '://' + req.get('host') +'/organizacion',
                organizacion:organizacionData
            },'')
        })
    })



};