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
  app.route('/api/v1/dpas')
    // Descomentar la siguiente linea para implementar autenticacion JWT
    //.all(app.auth.authenticate())
    /**
    * @api {post} /api/v1/dpas Crea dpa
    * @apiVersion 0.1.0
    * @apiName Postdpa
    * @apiGroup dpa
    *
    * @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
    * @apiSuccess {Nuumber} dpaId   Id dpa registrado.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *        "code": 0,
    *        "response": dpaId
    *     }
    *
    * @apiError dpaBadResponse: dpa no ha podido crearse
    *
    * @apiError BaD-Response:
    *     HTTP/1.1 400 Bad Response
    *     {
    *       "error": "BadResponse"
    *     }
    */
    .post(sequelizeHandlers.create(dpa))
    /**
    * @api {get} /api/v1/dpas Obtiene la información de dpa
    * @apiVersion 0.1.0
    * @apiName Getdpa
    * @apiGroup dpa
    *
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
    * @apiError dpaNotFound datos de  dpa no fueron encontrados.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "dpaNotFound"
    *     }
    */
    .get(sequelizeHandlers.query(dpa));
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

    app.route('/api/getAll').get(function (req,res) {
        // var text='hola como estan de casa'
        // organizacion.searchOrganizacion(text).then(function (re) {
        //     console.info(re)
        //     res.json({data:re});
        // })
        dpa.listDpa(tipo_dpa).then(function (array) {
            res.json({data:array});
        })
    });




};