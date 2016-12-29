/**
 * Created by iZel on 12/29/16.
 */
import sequelizeHandlers from "sequelize-handlers";
import multer from 'multer';
import xlstojson from "xls-to-json-lc";
import xlsxtojson from "xlsx-to-json-lc";
import q from 'q';
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

    app.route('/organizacion/:tipo_organizacion/:nombre_organizacion').get(function (req,res) {
        // var text='hola como estan de casa'
        console.log(req.params.tipo_organizacion,req.params.nombre_organizacion)
        organizacion.getOrganizacion(req.params.tipo_organizacion,req.params.nombre_organizacion).then(function (re) {
            console.info(re)
            res.json({data:re});
        })
    });




};