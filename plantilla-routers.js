module.exports =  function(file, apiVersion) {
  console.log("==========");
  console.log(apiVersion);
  console.log(file);
return `import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
const ${file} = app.src.db.models.${file};
app.route('/api/${apiVersion}/${file}s')
// Descomentar la siguiente linea para implementar autenticacion JWT
//.all(app.auth.authenticate())
/**
* @api {post} /api/${apiVersion}/${file}s Crea ${file}
* @apiVersion 0.1.0
* @apiName Post${file}
* @apiGroup ${file}
*
* @apiSuccess {Number} code  Código 0 conforme todo ha ido bien.
* @apiSuccess {Nuumber} ${file}Id   Id ${file} registrado.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*        "code": 0,
*        "response": ${file}Id
*     }
*
* @apiError ${file}BadResponse: ${file} no ha podido crearse
*
* @apiError BaD-Response:
*     HTTP/1.1 400 Bad Response
*     {
*       "error": "BadResponse"
*     }
*/
.post(sequelizeHandlers.create(${file}))
/**
* @api {get} /api/${apiVersion}/${file}s Obtiene la información de ${file}
* @apiVersion 0.1.0
* @apiName Get${file}
* @apiGroup ${file}
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
* @apiError ${file}NotFound datos de  ${file} no fueron encontrados.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "${file}NotFound"
*     }
*/
.get(sequelizeHandlers.query(${file}));
app.route('/api/${apiVersion}/${file}s/:id')
// Descomentar la siguiente linea para implementar autenticacion JWT
//.all(app.auth.authenticate())
/**
* @api {get} /api/${apiVersion}/${file}s/:id Obtiene la información de ${file}
* @apiVersion 0.1.0
* @apiName Get${file}
* @apiGroup ${file}
*
* @apiParam {Number} id ${file} unique ID.
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
* @apiError ${file}NotFound Id de ${file} no fue encontrado.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "${file}NotFound"
*     }
*/
.get(sequelizeHandlers.get(${file}))
/**
* @api {delete} /api/${apiVersion}/${file}s/:id Elimina ${file}
* @apiVersion 0.1.0
* @apiName Delete${file}
* @apiGroup ${file}
*
* @apiParam {Number} id ${file} unique ID.
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
* @apiError ${file} NotFound Id de ${file} no fue encontrado.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "${file}NotFound"
*     }
*/
.delete(sequelizeHandlers.remove(${file}))
/**
* @api {put} /${file}/:id Actualiza la información de ${file}
* @apiVersion 0.1.0
* @apiName Put${file}
* @apiGroup ${file}
*
* @apiParam {Number} id ${file} unique ID.
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
* @apiError ${file} NotFound Id de ${file} no fue encontrado.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "${file}NotFound"
*     }
*/
.put(sequelizeHandlers.update(${file}));
};`

};
