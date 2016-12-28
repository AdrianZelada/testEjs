/**
 * Created by iZel on 12/25/16.
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


    app.route('/api/upload').post(function (req,res) {
        // organizaciones
        // _uploadFile(req,res,_migrateData);
        console.info(organizacion.getSchema())
    });

    app.route('/api/update').post(function (req,res) {
        // organizaciones actualizacion
        _uploadFile(req,res,_updateMigrate);
    });

    app.route('/api/upload/moneda').post(function (req,res) {
        _uploadFile(req,res,_migrateParametric,'id_moneda_ge',moneda)
    });

    app.route('/api/upload/lugarPago').post(function (req,res) {
        _uploadFile(req,res,_migrateParametric,'id_lugar_pago',lugar_pago)
    });
    //
    app.route('/api/upload/tipoTramite').post(function (req,res) {
        _uploadFile(req,res,_migrateParametric,'id_tipo_tramite',tipo_tramite)
    });
    //
    app.route('/api/upload/categoriaTramite').post(function (req,res) {
        _uploadFile(req,res,_migrateParametric,'id_categoria_tramite',categoria_tramite)
    });
    //
    app.route('/api/upload/poblacionObjeto').post(function (req,res) {
        _uploadFile(req,res,_migrateParametric,'id_poblacion_objeto',poblacion_objeto)
    });

    app.route('/api/upload/tipoOrganizacion').post(function (req,res) {
        _uploadFile(req,res,_migrateParametric,'id_tipo_organizacion',tipo_organizacion)
    });

    function _migrateData(poolData,ind,res){
        if(poolData[ind]){
            let newDpa={
                nombre:     poolData[ind].nombre,
                id_tipo_dpa:   31,
                tipo:       poolData[ind].tipo,
                codigo_gbe: poolData[ind].codigo_gbe
            };
            if(poolData[ind].codigo_padre_gbe=='null'){
                //  creamos el dpa
                //  luego volvemos a llamar a la misama funcion para recursividad
                dpa.create(newDpa).then(function(){
                    ind=ind+1;
                    _migrateData(poolData,ind,res)
                })
            }else{
                //   primero buscamos en la tabla dpa mediante poolData[ind].codigo_padre_gbe == dpa.codigo_gbe,
                //    sacamos el id_dpa, y lo ponemos en el modelo a insertarce con el id_dpa_superior = id_dpa
                //    termina de llamar el promise y llamamos por recursividad a la misma funcion aumentando en indice
                if(poolData[ind].codigo_padre_gbe==''){
                    poolData[ind].codigo_padre_gbe='0'
                }
                dpa.findOne({
                    where:{
                        codigo_gbe:poolData[ind].codigo_padre_gbe
                    }
                }).then(function(respDpa){
                    newDpa.id_dpa_superior = respDpa.id_dpa;
                    newDpa.codigo_padre_gbe =poolData[ind].codigo_padre_gbe;
                    dpa.create(newDpa).then(function () {
                        ind=ind+1;
                        _migrateData(poolData,ind,res)
                    })
                });
            }
        }else{
            _complete(res,poolData)
        }
    }

    function _updateMigrate(poolData,ind,res){
        if(poolData[ind]){
            if(poolData[ind].codigo_gbe){
                dpa.findOne({
                    where:{
                        codigo_gbe:poolData[ind].codigo_gbe
                    }
                }).then(function (item) {
                    if(item){
                        item.updateAttributes({
                            direccion: poolData[ind].direccion,
                            mision: poolData[ind].mision,
                            sigla: poolData[ind].sigla,
                            correo: poolData[ind].correo,
                            telefonos: poolData[ind].telefonos,
                            twitter: poolData[ind].twitter,
                        }).then(function () {
                            ind=ind+1;
                            _updateMigrate(poolData,ind,res)
                        })
                    }else{
                        ind=ind+1;
                        _updateMigrate(poolData,ind,res)
                    }
                })
            }
        }else{
            res.json({error_code:0,err_desc:null, data:{
                msg:'Update Data Complete',
                result:poolData
            }});
        }
    }

    function _migrateParametric(poolData,ind,res,key,model) {
        if(poolData[ind]){
            var newObject=_extend(poolData[ind]);
            _parametricFind(model,key).then(function (result) {
                if(!result){
                    model.create(newObject).then(function () {
                        ind=ind+1;
                        _migrateParametric(poolData,ind,res,key,model)
                    })
                }
            });
        }else{
            _complete(res,poolData)
        }
    }

    function _parametricFind(model,key){
        let where={};
        where[key]=model[key];
        return model.findOne({
            where:where
        });
    }

    function _complete(res,poolData) {
        res.json({error_code:0,err_desc:null, data:{
            msg:'Migrate Complete',
            result:poolData
        }});
    }

    function _extend(obj){
        let objExtend={};
        for(let key in obj){
            objExtend[key]=obj[key];
        }
        return objExtend;
    }

    function _uploadFile(req,res,fn,key,model){
        var storage = multer.diskStorage({ //multers disk storage settings
            destination: function (req, file, cb) {
                cb(null, './uploads/')
            },
            filename: function (req, file, cb) {
                var datetimestamp = Date.now();
                cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
            }
        });

        var upload = multer({ //multer settings
            storage: storage,
            fileFilter : function(req, file, callback) { //file filter
                if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                    return callback(new Error('Wrong extension type'));
                }
                callback(null, true);
            }
        }).single('file');

        var exceltojson;

        upload(req,res,function(err){
            if(err){
                res.json({error_code:1,err_desc:err});
                return;
            }
            /** Multer gives us file info in req.file object */

            if(!req.file){
                res.json({error_code:1,err_desc:"No file passed"});
                return;
            }
            /** Check the extension of the incoming file and
             *  use the appropriate module
             */
            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            }
            try {
                exceltojson({
                    input: req.file.path,
                    output: null, //since we don't need output.json
                    lowerCaseHeaders:true
                }, function(err,result){
                    if(err) {
                        return res.json({error_code:1,err_desc:err, data: null});
                    }
                    fn(result,0,res,key,model);
                });
            } catch (e){
                res.json({error_code:1,err_desc:"Corupted excel file"});
            }
        })
    }

    function _organizationMigrate(poolData,ind,res,key,model){
        if(poolData[ind]){
            if(poolData[ind].codigo_superior_organizacion_ge){

                let newOrganizacion={
                    id_tipo_organizacion:       poolData[ind].id_tipo_organizacion,
                    nombre_organizacion:     poolData[ind].nombre_organizacion,
                    codigo_organizacion_gbe: poolData[ind].codigo_organizacion_gbe,
                    codigo_superior_organizacion_gbe: poolData[ind].codigo_superior_organizacion_gbe
                };
                if(poolData[ind].codigo_superior_organizacion_ge=='null'){
                    //  creamos el dpa
                    //  luego volvemos a llamar a la misama funcion para recursividad
                    newOrganizacion.create(newDpa).then(function(){
                        ind=ind+1;
                        _migrateData(poolData,ind,res)
                    })
                }else{
                    if(poolData[ind].codigo_superior_organizacion_ge==''){
                        poolData[ind].codigo_superior_organizacion_ge='0'
                    }

                    organizacion.findOne({
                        where:{
                            codigo_gbe:poolData[ind].codigo_superior_organizacion_ge
                        }
                    }).then(function(respOrg){
                        if(respOrg){
                            newOrganizacion.id_superior_organizacion = respDpa.id_organizacion;
                            newOrganizacion.codigo_superior_organizacion_ge =poolData[ind].codigo_superior_organizacion_ge;
                            newOrganizacion.create(newDpa).then(function () {
                                ind=ind+1;
                                _migrateData(poolData,ind,res)
                            })
                        }
                    });
                }
            }
        }
    }

};