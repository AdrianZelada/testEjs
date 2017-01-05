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
    const tipo_campo_organizacion= app.src.db.models.tipo_campo_organizacion;
    const valor_campo_organizacion = app.src.db.models.valor_campo_organizacion;
    const tramite = app.src.db.models.tramite;
    const pasos = app.src.db.models.pasos;
    const tramite_categoria_tramite = app.src.db.models.tramite_categoria_tramite;
    const tramite_poblacion_objeto = app.src.db.models.tramite_poblacion_objeto;
    const tramite_tipo_tramite = app.src.db.models.tramite_tipo_tramite;
    const forma_pago = app.src.db.models.forma_pago;
    const requisito = app.src.db.models.requisito;


    var notMerge=[];


    app.route('/api/upload').post(function (req,res) {
        // organizaciones
        console.info(organizacion.getSchema());
        _uploadFile(req,res,_migrateData);

    });

    app.route('/api/update').post(function (req,res) {
        notMerge=[];
        tipo_campo_organizacion.getAll().then((listTipoCampo)=>{
            var tipoCampoReduce={};
            listTipoCampo.reduce(function (result,val,ind) {
                result[val.tipo_campo_organizacion]=val.id_tipo_campo_organizacion;
                return result;
            },tipoCampoReduce);
            console.info(tipoCampoReduce)
            _uploadFile(req,res,_updateOrganizacionMigrate,tipoCampoReduce);
        });
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

    app.route('/api/upload/tramite').post(function (req,res) {
        _uploadFile(req,res,_migrateTramitePartials,'id_tramite',tramite)
    });

    app.route('/api/upload/tramite_categoria_tramite').post(function (req,res) {
        _uploadFile(req,res,_migrateTramiteCategoriaTramite,'id_tramite_categoria_tramite',tramite_categoria_tramite)
    });

    app.route('/api/upload/forma_pago').post(function (req,res) {
        _uploadFile(req,res,_migrateFormaPago,'id_forma_pago',forma_pago)
    });

    app.route('/api/upload/pasos').post(function (req,res) {
        _uploadFile(req,res,_migratePasos,'id_paso',pasos)
    });

    app.route('/api/upload/poblacionObjetoTramite').post(function (req,res) {
        _uploadFile(req,res,_migratePoblacionObjeto,'id_tramite_poblacion_objeto',tramite_poblacion_objeto)
    });

    app.route('/api/upload/tipoResultadoTramite').post(function (req,res) {
        _uploadFile(req,res,_migrateTipoResultado,'id_tramite_tipo_tramite',tramite_tipo_tramite)
    });

    app.route('/api/upload/requisitos').post(function (req,res) {
        _uploadFile(req,res,_migrateRequisitos,'id_requisito',requisito)
    });

    app.route('/api/update/updateRequisito').post(function (req,res) {
        requisito.findAll().then((requisitosData)=>{
            _updateRequisitos(requisitosData,0,res)
        })
    });


    function _updateRequisitos(poolData,ind,res) {
        if (poolData[ind]) {
            tramite.findOne({
                where: {
                    codigo_tramite_ge: poolData[ind].codigo_tramite_ge
                }
            }).then((transactData) => {
                if(transactData){

                    requisito.findOne({
                        where:{
                            id_requisito:poolData[ind].id_requisito
                        }
                    }).then((requisitoData)=>{
                        requisitoData.updateAttributes({
                            id_tramite_requisito:parseInt(transactData.id_tramite)
                        }).then(()=>{
                            console.info(transactData.id_tramite);
                            ind=ind+1;
                            _updateRequisitos(poolData,ind,res)
                        });
                    })
                }else{
                    ind=ind+1;
                    _updateRequisitos(poolData,ind,res)
                }
            })
        }else{
            _complete(res,poolData)
        }
    }


    function _migrateRequisitos(poolData,ind,res){
        if (poolData[ind]) {
            tramite.findOne({
                where: {
                    codigo_tramite_ge: poolData[ind].codigo_tramite_ge
                }
            }).then((transactData) => {
                if(transactData){
                    poolData[ind].requisitos=           _validateParseJson(_replaceMarksBrackets(poolData[ind].requisitos),res);

                    let bulkCreateRequisito=poolData[ind].requisitos.map((val,ind)=>{
                        return {
                            id_tramite:parseInt(transactData.id_tramite),
                            codigo_tramite_ge:val.CodTramite,
                            nombre_requisito:val.Requisito,
                            papel_original:val.Original,
                            papel_fotocopia:val.Copia,
                            papel_fotocopia_legalizada:val.CopiaLegalizada,
                        };
                    });

                    requisito.bulkCreate(bulkCreateRequisito).then(()=>{
                        ind=ind+1;
                        _migrateRequisitos(poolData,ind,res);
                    });

                }else{
                    console.info(poolData[ind])
                }
            })
        }else{
            _complete(res,poolData)
        }
    }

    function _migrateTipoResultado(poolData,ind,res){
        if (poolData[ind]) {
            tramite.findOne({
                where: {
                    codigo_tramite_ge: poolData[ind].codigo_tramite_ge
                }
            }).then((transactData) => {
                if(transactData){
                    poolData[ind].tipo_resultado_tramite=   _validateParseJson(_replaceMarksBrackets(poolData[ind].tipo_resultado_tramite),res);

                    let bulkCreateResultTramite=poolData[ind].tipo_resultado_tramite.ResultadoTramite.map((val)=>{
                        return {
                            id_tramite:parseInt(transactData.id_tramite),
                            id_tipo_tramite:parseInt(val)
                        }
                    });

                    tramite_tipo_tramite.bulkCreate(bulkCreateResultTramite).then(()=>{
                        ind=ind+1;
                        _migrateTipoResultado(poolData,ind,res);
                    });
                    // ind=ind+1;
                    // _migrateTipoResultado(poolData,ind,res);
                }else{
                    console.info(poolData[ind])
                }


            })
        }else{
            _complete(res,poolData)
        }
    }

    function _migratePoblacionObjeto(poolData,ind,res){
        if (poolData[ind]) {
            tramite.findOne({
                where: {
                    codigo_tramite_ge: poolData[ind].codigo_tramite_ge
                }
            }).then((transactData) => {
                if(transactData){
                    poolData[ind].poblacion_objeto=         _validateParseJson(_replaceMarksBrackets(poolData[ind].poblacion_objeto),res);

                    let bulkCreatePeople=poolData[ind].poblacion_objeto.PoblacionObjeto.map((val)=>{
                        return{
                            id_tramite:parseInt(transactData.id_tramite),
                            id_poblacion_objeto:parseInt(val)
                        }
                    });
                    tramite_poblacion_objeto.bulkCreate(bulkCreatePeople).then(()=>{
                        ind=ind+1;
                        _migratePoblacionObjeto(poolData,ind,res);
                    });
                    // ind=ind+1;
                    // _migratePoblacionObjeto(poolData,ind,res);
                }else{
                    console.info(poolData[ind])
                }
            })
        }else{
            _complete(res,poolData)
        }
    }

    function _migratePasos(poolData,ind,res){
        if (poolData[ind]) {
            tramite.findOne({
                where: {
                    codigo_tramite_ge: poolData[ind].codigo_tramite_ge
                }
            }).then((transactData) => {
                if(transactData){
                    poolData[ind].pasos=                    _validateParseJson(_replaceMarksDouble(poolData[ind].pasos),res);

                    let bulkCreateSteps=[];

                    for(let key in poolData[ind].pasos){
                        if(parseInt(key)){
                            bulkCreateSteps.push({
                                id_tramite:parseInt(transactData.id_tramite),
                                orden_paso:parseInt(key),
                                nombre_paso:"",
                                descripcion_paso:poolData[ind].pasos[key]
                            });
                        }
                    }

                    pasos.bulkCreate(bulkCreateSteps).then(()=>{
                        ind=ind+1;
                        _migratePasos(poolData,ind,res);
                    });
                    // ind=ind+1;
                    // _migratePasos(poolData,ind,res);
                }else{

                }
            })
        }else{
            _complete(res,poolData)
        }
    }


    function _migrateFormaPago(poolData,ind,res){
        if (poolData[ind]) {
            tramite.findOne({
                where: {
                    codigo_tramite_ge: poolData[ind].codigo_tramite_ge
                }
            }).then((transactData) => {
                if(transactData){
                    poolData[ind].forma_pago= _validateParseJson(_replaceFormaPago(_replaceMarksBrackets(poolData[ind].forma_pago)),res);

                    let bulkCreateFormaPago = poolData[ind].forma_pago.map((val)=>{
                        let bulkCreatePago=val.LugarPago.map((item)=>{
                            return {
                                id_moneda:parseInt(val.Moneda),
                                id_lugar_pago:parseInt(item),
                                id_tramite:parseInt(transactData.id_tramite),
                                costo:val.Costo,
                                nombre_cuenta:val.NombreCuenta,
                                numero_cuenta:val.NumeroCuenta
                            }
                        });
                        forma_pago.bulkCreate(bulkCreatePago).then(()=>{
                            ind=ind+1;
                            _migrateFormaPago(poolData,ind,res);
                        });
                        return val;
                    });
                    // ind=ind+1;
                    // _migrateFormaPago(poolData,ind,res);
                }else{
                    console.info(poolData[ind])
                }
            })
        }else{
            _complete(res,poolData)
        }
    }

    function _migrateTramiteCategoriaTramite(poolData,ind,res){
        if (poolData[ind]) {
            tramite.findOne({
                where: {
                    codigo_tramite_ge: poolData[ind].codigo_tramite_ge
                }
            }).then((transactData) => {
                if(transactData){
                    poolData[ind].categoria_tramite= _validateParseJson(_replaceMarksBrackets(poolData[ind].categoria_tramite),res);


                    let bulkCreateTransact = poolData[ind].categoria_tramite.Categorias.map((val)=>{
                        return {
                            id_tramite:parseInt(transactData.id_tramite),
                            id_categoria_tramite:parseInt(val)
                        }
                    });

                    tramite_categoria_tramite.bulkCreate(bulkCreateTransact).then(()=>{
                        ind=ind+1;
                        _migrateTramiteCategoriaTramite(poolData,ind,res)
                    })
                }else{

                }
            })
        }else{
            _complete(res,poolData)
        }
    }

    function _migrateTramitePartials(poolData,ind,res) {
        if (poolData[ind]) {

            let newTransact = {
                codigo_tramite_ge: poolData[ind].codigo_tramite_ge,
                nombre_tramite: poolData[ind].nombre_tramite,
                descripcion_tramite: poolData[ind].descripcion_tramite,
                duracion: poolData[ind].duracion,
                fecha_actualizacion: poolData[ind].fecha_actualizacion,
            };

            organizacion.findOne({
                where: {
                    codigo_organizacion_ge: poolData[ind].codigo_organizacion_ge
                }
            }).then((organizacionData) => {
                if (organizacionData) {
                    newTransact.id_organizacion = organizacionData.id_organizacion;
                    tramite.create(newTransact).then((transactData) => {
                        ind=ind+1;
                        _migrateTramitePartials(poolData,ind,res)
                    })
                }
            })
        }else{
            _complete(res,poolData)
        }
    }

    function _migrateTramite(poolData,ind,res) {
        if(poolData[ind]){

            let newTransact={
                codigo_tramite_ge:poolData[ind].codigo_tramite_ge,
                nombre_tramite:poolData[ind].nombre_tramite,
                descripcion_tramite:poolData[ind].descripcion_tramite,
                duracion:poolData[ind].duracion,
                fecha_actualizacion:poolData[ind].fecha_actualizacion,
            };

            poolData[ind].categoria_tramite=        _validateParseJson(_replaceMarksBrackets(poolData[ind].categoria_tramite),res);

            poolData[ind].forma_pago=               _validateParseJson(_replaceFormaPago(_replaceMarksBrackets(poolData[ind].forma_pago)),res);

            poolData[ind].pasos=                    _validateParseJson(_replaceMarksDouble(poolData[ind].pasos),res);

            poolData[ind].poblacion_objeto=         _validateParseJson(_replaceMarksBrackets(poolData[ind].poblacion_objeto),res);

            poolData[ind].tipo_resultado_tramite=   _validateParseJson(_replaceMarksBrackets(poolData[ind].tipo_resultado_tramite),res);

            organizacion.findOne({
                where:{
                    codigo_organizacion_ge:poolData[ind].codigo_organizacion_ge
                }
            }).then((organizacionData)=>{
                if(organizacionData){
                    newTransact.id_organizacion=organizacionData.id_organizacion;
                    tramite.create(newTransact).then((transactData)=>{

                        // Creacion de ----- tramite_categoria_tramite
                        newTransact.id_tramite=transactData.id_tramite;
                        let bulkCreateTransact = poolData[ind].categoria_tramite.Categorias.map((val)=>{
                            return {
                                id_tramite:parseInt(newTransact.id_tramite),
                                id_categoria_tramite:parseInt(val)
                            }
                        });

                        tramite_categoria_tramite.bulkCreate(bulkCreateTransact).then(()=>{
                            //creacion pasos
                            let bulkCreateSteps=[];

                            for(let key in poolData[ind].pasos){
                                if(parseInt(key)){
                                    bulkCreateSteps.push({
                                        id_tramite:parseInt(newTransact.id_tramite),
                                        orden_tramite:parseInt(key),
                                        nombre_paso:"",
                                        descripcion_paso:poolData[ind].pasos[key]
                                    });
                                }
                            }

                            pasos.bulkCreate(bulkCreateSteps).then(()=>{
                                //    creacion tramite_poblacion_objeto

                                let bulkCreatePeople=poolData[ind].poblacion_objeto.PoblacionObjeto.map((val)=>{
                                    return{
                                        id_tramite:parseInt(newTransact.id_tramite),
                                        id_poblacion_objeto:parseInt(val)
                                    }
                                });
                                tramite_poblacion_objeto.bulkCreate(bulkCreatePeople).then(()=>{
                                    //    Creacion Forma de Pago ---
                                    let bulkCreateFormaPago = poolData[ind].forma_pago.map((val)=>{
                                        let bulkCreatePago=val.LugarPago.map((item)=>{
                                            return {
                                                id_moneda:parseInt(val.Moneda),
                                                id_lugar_pago:parseInt(item),
                                                id_tramite:parseInt(newTransact.id_tramite),
                                                costo:val.Costo,
                                                nombre_cuenta:val.NombreCuenta,
                                                numero_cuenta:val.NumeroCuenta
                                            }
                                        });
                                        forma_pago.bulkCreate(bulkCreatePago).then(()=>{

                                        })
                                    });

                                    let bulkCreateResultTramite=poolData[ind].tipo_resultado_tramite.ResultadoTramite.map((val)=>{
                                       return {
                                           id_tramite:parseInt(newTransact.id_tramite),
                                           id_tipo_tramite:parseInt(val)
                                       }
                                    });

                                    tramite_tipo_tramite.bulkCreate(bulkCreateResultTramite).then(()=>{
                                        ind=ind+1;
                                        _migrateTramite(poolData,ind,res)
                                    }).catch((e)=>{
                                        console.log('tipo_tramite')
                                        console.log(e)
                                        console.log(bulkCreatePeople)
                                        console.log(poolData[ind])
                                    });



                                }).catch((e)=>{
                                    console.log('gente')
                                    console.log(e)
                                    console.log(bulkCreatePeople)
                                    console.log(poolData[ind])
                                });
                                //    end tramite_poblacion_objeto
                            }).catch((e)=>{
                                console.log('pasos')
                                console.log(e)
                                console.log(bulkCreateSteps)
                                console.log(poolData[ind])
                            });
                            //end pasos
                        }).catch((e)=>{
                            console.log(tramite)
                            console.log(e)
                            console.log(bulkCreateTransact)
                            console.log(poolData[ind])
                        });
                        // end Creacion
                    });
                }
            });


            //hay buscar la organizacion por el codigo_organizacion_ge
            // poolData[ind].categoria_tramite=    _validateParseJson(_replaceMarksBrackets(poolData[ind].categoria_tramite),res);
            // poolData[ind].forma_pago=           _validateParseJson(_replaceFormaPago(_replaceMarksBrackets(poolData[ind].forma_pago)),res);
            // poolData[ind].pasos=                _validateParseJson(_replaceMarksDouble(poolData[ind].pasos),res);
            // poolData[ind].poblacion_objeto=     _validateParseJson(_replaceMarksBrackets(poolData[ind].poblacion_objeto),res);
            // poolData[ind].requisitos=           _validateParseJson(_replaceMarksBrackets(poolData[ind].requisitos),res);
            // poolData[ind].tipo_resultado_tramite=_validateParseJson(_replaceMarksBrackets(poolData[ind].tipo_resultado_tramite),res);

            //
            // _migrateFormaPago(poolData[ind].forma_pago);
            //
            // _migratePasos(poolData[ind].pasos);
            //
            // _migratePoblacionObjeto(poolData[ind].poblacion_objeto);


            //aun no se tiene los requisitos de manera buena jua jua jua jjajajjaa sonsos
            // _migrateRequisitos(poolData[ind].requisitos);

            // _migrateTipoResultadoTramite(poolData[ind].tipo_resultado_tramite);
            // console.info(poolData[ind]);
        }else{
            _complete(res,poolData)
        }
    }

    function _migrateData(poolData,ind,res){
        if(poolData[ind]){
            let newOrg={
                nombre_organizacion:     poolData[ind].nombre_organizacion,
                id_tipo_organizacion:   poolData[ind].id_tipo_organizacion,
                codigo_organizacion_ge: poolData[ind].codigo_organizacion_ge,
                codigo_organizacion_superior_ge: poolData[ind].codigo_organizacion_superior_ge,
                url_organizacion:poolData[ind].nombre_organizacion.toLowerCase().replace(/ /g,'_'),
            };

            newOrg.url_organizacion = newOrg.url_organizacion.replace(/á/gi,"a");
            newOrg.url_organizacion = newOrg.url_organizacion.replace(/é/gi,"e");
            newOrg.url_organizacion = newOrg.url_organizacion.replace(/í/gi,"i");
            newOrg.url_organizacion = newOrg.url_organizacion.replace(/ó/gi,"o");
            newOrg.url_organizacion = newOrg.url_organizacion.replace(/ú/gi,"u");
            newOrg.url_organizacion = newOrg.url_organizacion.replace(/ñ/gi,"n");
            // return cadena;

            console.info(newOrg)

            if(poolData[ind].codigo_organizacion_superior_ge=='null'){
                //  creamos el dpa
                //  luego volvemos a llamar a la misama funcion para recursividad
                newOrg.id_organizacion_superior = 0;
                organizacion.create(newOrg).then(function(){
                    ind=ind+1;
                    _migrateData(poolData,ind,res)
                })
            }else{
                //   primero buscamos en la tabla dpa mediante poolData[ind].codigo_padre_gbe == dpa.codigo_gbe,
                //    sacamos el id_dpa, y lo ponemos en el modelo a insertarce con el id_dpa_superior = id_dpa
                //    termina de llamar el promise y llamamos por recursividad a la misma funcion aumentando en indice
                if(poolData[ind].codigo_organizacion_superior_ge==''){
                    poolData[ind].codigo_organizacion_superior_ge='0'
                }
                organizacion.findOne({
                    where:{
                        codigo_organizacion_ge:poolData[ind].codigo_organizacion_superior_ge
                    }
                }).then(function(respOrg){
                    newOrg.id_organizacion_superior = respOrg.id_organizacion;
                    newOrg.codigo_organizacion_superior_ge =poolData[ind].codigo_organizacion_superior_ge;
                    organizacion.create(newOrg).then(function () {
                        ind=ind+1;
                        _migrateData(poolData,ind,res)
                    })
                });
            }
        }else{
            _complete(res,poolData)
        }
    }

    function _updateMigrate(poolData,ind,res,arrayTipoCampo){
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

    function _updateUrlOrganizacion(poolData,ind,res){
        if(poolData[ind]){
            organizacion.findOne({
                id_organizacion:poolData[ind].id_organizacion
            }).then((organizacionData)=>{
                organizacionData.updateAttributes({
                    url_organizacion:organizacionData.url_organizacion.replace(/ /g,'_').substring(1)
                }).then(()=>{
                    ind=ind+1;
                    _updateUrlOrganizacion(poolData,ind,res)
                })
            })
        }else{
            res.json({error_code:0,err_desc:null, data:{
                msg:'Update Data Complete',
            }});
        }
    }

    function _updateOrganizacionMigrate(poolData,ind,res,objectReduce) {
        if(poolData[ind]){
            organizacion.findOne({
                where:{
                    codigo_organizacion_ge:poolData[ind].codigo_organizacion_ge
                }
            }).then((organizacionData)=>{
                if(organizacionData){
                    organizacionData.updateAttributes({
                        sigla_organizacion:poolData[ind].sigla
                    }).then(()=>{
                        for(let key in objectReduce){
                            if(poolData[ind][key]){
                                let objCreate={
                                    id_organizacion:organizacionData.id_organizacion,
                                    id_tipo_campo_organizacion:objectReduce[key],
                                    // codigo_organizacion_ge:poolData[ind].codigo_organizacion_ge,
                                    valor_campo_organizacion:poolData[ind][key]
                                };
                                valor_campo_organizacion.create(objCreate).then(()=>{
                                    console.info(objCreate)
                                })
                            }
                        }
                    });
                }else{
                    if(poolData[ind].codigo_organizacion_ge!=''){
                        notMerge.push(poolData[ind].codigo_organizacion_ge)
                    }
                }
                ind=ind+1;
                _updateOrganizacionMigrate(poolData,ind,res,objectReduce)
            });

        }else{
            res.json({error_code:0,err_desc:null, data:{
                msg:'Update Data Complete',
                result:poolData,
                notMerge:notMerge
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
                    console.info(result)
                    fn(result,0,res,key,model);
                });
            } catch (e){
                res.json({error_code:1,err_desc:"Corupted excel file"});
            }
        })
    }

    function _validateParseJson(text,res){
        try{
            return JSON.parse(text);
        }catch (e){
            console.log(e)
            console.log(text)
            console.info(text)
            res.json({error:e});
        }
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


    function _replaceMarksBrackets(text){
        text=text.replace(/'/g,'"');
        text=text.replace(/, , ]/g,']');
        text=text.replace(/, ]/g,']');
        text=text.replace(/,]/g,']');
        text=text.replace(/\n/g,' ');
        return text;
    }

    function _replaceFormaPago(text){
        text=text.replace(/Ninguno/g,0);
        text=text.replace(/Según trámite y tipo societario./g,0);
        text=text.replace(/a": ,/g,'a":null,');

        var arrayText=text.split(',')

        if(parseInt(arrayText[1])){
            var regex = new RegExp("," + arrayText[1], "g");

            text=text.replace(regex,'.'+arrayText[1])
        }

        return text;
    }

    function _replaceMarksDouble(text){


        text=text.replace(/"/g,'-');
        text=text.replace(/'/g,'"');
        text=text.replace(/\n/g,' ');

        text=text.replace(/""/g,'","');
        text=text.replace(/-.-}/g,'"}');
        text=text.replace(/, "2.9" : "Proceso para el ciudadano", /g,'');

        return text;
    }

};