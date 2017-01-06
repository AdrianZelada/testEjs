import sequelizeHandlers from "sequelize-handlers";
import _ from "lodash"
import util from '../../src/libs/useful.js';
module.exports = app => {
  const tramite = app.src.db.models.tramite;
  const categoria_tramite = app.src.db.models.categoria_tramite;
  const organizacion = app.src.db.models.organizacion;

    app.route('/tramites/:idCategoria?/:nombreCategoria?').get((req,res)=>{
        var categoryTransc = req.params.idCategoria;
        tramite.getTranscForCategory(categoryTransc).then((transc)=>{
            categoria_tramite.findAll({}).then((resultCate)=>{

                var newCategories=
                    resultCate.map((category)=> {
                        return{
                            url_list_tramites:req.protocol + '://' + req.get('host') +'/tramites/'+category.id_categoria_tramite+'/'+category.url_categoria_tramite,
                            nombre_categoria_tramite: category.nombre_categoria_tramite,
                            codigo_categoria_tramite: category.codigo_categoria_tramite,
                            logo_categoria_tramite: category.logo_categoria_tramite,
                            descripcion_categoria_tramite: category.descripcion_categoria_tramite
                        }
                    });

                var newTransc=
                    transc.map((transcData)=>{
                        return{
                            nombre_tramite:transcData.nombre_tramite,
                            codigo_tramite_ge:transcData.codigo_tramite_ge,
                            codigo_tramite:transcData.id_tramite,
                            descripcion_tramite:transcData.descripcion_tramite,
                            url_view_tramite:req.protocol + '://' + req.get('host') +'/tramite/'+transcData.id_tramite
                        }
                    });
                util.serverResponse(res,{
                    tramites:newTransc,
                    categorias:newCategories
                },'')
            });
        })
    });

    app.route('/tramite/:idTramite').get((req,res)=>{
        var idTransc = req.params.idTramite;

        tramite.getOneTransc(idTransc).then((transc)=>{
            organizacion.getHierarchy(transc[0].organizacion.id_organizacion,req).then((hierarchy)=>{
                var transcBuild={
                    codigo_tramite:transc[0].codigo_tramite,
                    codigo_tramite_ge:transc[0].codigo_tramite_ge,
                    nombre_tramite:transc[0].nombre_tramite,
                    descripcion_tramite:transc[0].descripcion_tramite,
                    duracion:transc[0].duracion,
                    fecha_actualizacion:transc[0].fecha_actualizacion,
                    tramite_categoria_tramites:buildArray(transc[0].tramite_categoria_tramites,'categoria_tramite'),
                    requisitos:buildRequisito(transc[0].requisitos),
                    pasos:transc[0].pasos,
                    poblacion_objeto:buildPoblacion(transc[0].tramite_poblacion_objetos,'poblacion_objeto'),
                    organizacion:buildOrganizacion(transc[0].organizacion)
                };
                util.serverResponse(res,{
                    tramites:transcBuild
                },'')
            });
        });

        function buildArray(array,key) {
            var newCatergories=[];
            array.forEach((item)=>{
                newCatergories.push(item[key]);
            });
            return newCatergories;
        }

        function buildPoblacion(array,key){
            var newCatergories=[];
            array.forEach((item)=>{
                let objeto=item[key].toJSON();
                newCatergories.push(objeto.nombre_poblacion_obj);
            });
            return newCatergories;
        }

        function buildOrganizacion(organizacionItem) {
            return{
                url_list_organizacion:req.protocol + '://' + req.get('host') +'/organizaciones/'+organizacionItem.id_organizacion,
                url_view_organizacion:req.protocol + '://' + req.get('host') +'/organizacion/'+organizacionItem.tipo_organizacion.url_tipo_organizacion+'/'+organizacionItem.id_organizacion,
                nombre_organizacion:organizacionItem.nombre_organizacion,
                codigo_organizacion:organizacionItem.id_organizacion,
                sigla_organizacion:organizacionItem.sigla_organizacion,
                codigo_sigma:organizacionItem.codigo_sigma,
            }
        }
        function buildRequisito(array) {
            var newRequisito=[];
            array.forEach((transcData)=>{
                let required={
                    nombre_requisito:transcData.nombre_requisito,
                    papel_original:transcData.papel_original,
                    papel_fotocopia:transcData.papel_fotocopia,
                    papel_fotocopia_legalizada:transcData.papel_fotocopia_legalizada,
                };
                required.url_view_tramite = transcData.id_tramite_requisito ? req.protocol + '://' + req.get('host') +'/tramite/'+transcData.id_tramite_requisito : transcData.id_tramite_requisito,

                newRequisito.push(required);
            });
            return newRequisito;
        }
    });
};