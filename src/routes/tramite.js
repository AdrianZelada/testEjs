import sequelizeHandlers from "sequelize-handlers";
import _ from "lodash"
import util from '../../src/libs/useful.js';
module.exports = app => {
  const tramite = app.src.db.models.tramite;
  const categoria_tramite = app.src.db.models.categoria_tramite;
  const tramite_categoria_tramite = app.src.db.models.categoria_tramite;
  // app.route('/tramites').get((req,res)=>{
  //     categoria_tramite.findAll({}).then((resultCate)=>{
  //         res.json({
  //             categorias:resultCate
  //         })
  //     });
  // });

    app.route('/tramites/:idCategoria?/:nombreCategoria?').get((req,res)=>{
        var categoryTransc = req.params.idCategoria;
        console.log('--->',categoryTransc)
        tramite.getTranscForCategory(categoryTransc).then((transc)=>{
            categoria_tramite.findAll({}).then((resultCate)=>{

                var newCategories=
                    resultCate.map((category)=> {
                        return{
                            url_tramites:req.protocol + '://' + req.get('host') +'/tramites/'+category.id_categoria_tramite+'/'+category.url_categoria_tramite,
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
            // var buildCategory=_.clone(transc[0].tramite_categoria_tramites);
            // var newCategories=buildCategories(buildCategory)
            var transcBuild={
                codigo_tramite:transc[0].codigo_tramite,
                codigo_tramite_ge:transc[0].codigo_tramite_ge,
                nombre_tramite:transc[0].nombre_tramite,
                descripcion_tramite:transc[0].descripcion_tramite,
                duracion:transc[0].duracion,
                fecha_actualizacion:transc[0].fecha_actualizacion,
                tramite_categoria_tramites:buildArray(transc[0].tramite_categoria_tramites,'categoria_tramite'),
                requisitos:transc[0].requisitos,
                pasos:transc[0].pasos,
                tramite_poblacion_objetos:buildArray(transc[0].tramite_poblacion_objetos,'poblacion_objeto'),
                organizacion:buildOrganizacion(transc[0].organizacion)
            };


            util.serverResponse(res,{
                tramites:transcBuild
            },'')
        });

        function buildArray(array,key) {
            var newCatergories=[];
            array.forEach((item)=>{
                newCatergories.push(item[key]);
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
    });



};