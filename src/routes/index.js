import sequelizeHandlers from "sequelize-handlers";
import multer from 'multer';
import xlstojson from "xls-to-json-lc";
import xlsxtojson from "xlsx-to-json-lc";
import q from 'q';
import os from 'os';
import useful from '../../src/libs/useful.js';
module.exports = app => {
    const dpa = app.src.db.models.dpa;
    const organizacion = app.src.db.models.organizacion;
    const tramite = app.src.db.models.tramite;

    app.route('/')
        .get((req,res)=>{

            console.log(os.hostname());
            res.render('pages/inicio', {

            });
        });

    app.route('/buscar')
        .get((req,res)=>{
            var busqueda='';
            if(req.query.busqueda){
                busqueda=req.query.busqueda.replace(" ","_").toLowerCase();
            }

            res.redirect('/buscar/'+busqueda);
        });

    app.route('/buscar/:busqueda?')
        .get((req,res)=>{
            // aun falta integrar las busqueda de tramites
            var textToSearch=req.params.busqueda.replace("_"," ");
            organizacion.searchOrganizacion(textToSearch).then((resultOrg)=>{
                tramite.searchTramite(textToSearch).then((resultTramite)=>{
                    var newResult=resultOrg.map((organizacionItem)=>{
                        return {
                            url_view_organizacion:useful.urlBuildViewOrganizacion(req,organizacionItem),
                            nombre_organizacion:organizacionItem.nombre_organizacion,
                            codigo_organizacion:organizacionItem.id_organizacion,
                            sigla_organizacion:organizacionItem.sigla_organizacion,
                            codigo_sigma:organizacionItem.codigo_sigma
                        }
                    });
                    var newTransc=
                        resultTramite.map((transcData)=>{
                            return{
                                nombre_tramite:transcData.nombre_tramite,
                                codigo_tramite_ge:transcData.codigo_tramite_ge,
                                codigo_tramite:transcData.id_tramite,
                                descripcion_tramite:transcData.descripcion_tramite,
                                url_view_tramite:useful.urlBuildViewTramite(req,transcData)
                            }
                        });
                    useful.serverResponse(res,{
                        organizaciones:newResult,
                        tramites:newTransc
                    },'pages/busqueda',req);
                });

            });
        });
    app.route('/api/v1/dpas/:id')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
     * @api {get} /api/v1/dpas/:id Obtiene la información de dpa
     * @apiVersion 0.1.0
     * @apiName Getdpa
     * @apiGroup dpa
     *
     * @apiParam {Number} id dpa unique ID.
     *
     * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
     * @apiSuccess {Bool} true/false  True o false dependiendo del resultado.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
    *       "code": 0,
    *       "response": true
    *     }
     *
     * @apiError dpaNotFound Id de dpa no fue encontrado.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
    *       "error": "dpaNotFound"
    *     }
     */
        .get(sequelizeHandlers.get(dpa))
        /**
         * @api {delete} /api/v1/dpas/:id Elimina dpa
         * @apiVersion 0.1.0
         * @apiName Deletedpa
         * @apiGroup dpa
         *
         * @apiParam {Number} id dpa unique ID.
         *
         * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
         * @apiSuccess {Bool} true/false True o false dependiendo del resultado.
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
    *       "code": 0,
    *       "response": true
    *     }
         *
         * @apiError dpa NotFound Id de dpa no fue encontrado.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
    *       "error": "dpaNotFound"
    *     }
         */
        .delete(sequelizeHandlers.remove(dpa))
        /**
         * @api {put} /dpa/:id Actualiza la información de dpa
         * @apiVersion 0.1.0
         * @apiName Putdpa
         * @apiGroup dpa
         *
         * @apiParam {Number} id dpa unique ID.
         *
         * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
         * @apiSuccess {Bool} true/false True o false dependiendo del resultado.
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
    *       "code": 0,
    *       "response": true
    *     }
         *
         * @apiError dpa NotFound Id de dpa no fue encontrado.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
    *       "error": "dpaNotFound"
    *     }
         */
        .put(sequelizeHandlers.update(dpa));

    app.route('/').get(function (req,res) {
        res.render('pages/inicio', {});
    });

    app.route('/error').get((req,res)=>{
       res.render('pages/404')
    });




};