/**
 * Created by iZel on 1/9/17.
 */
import useful from '../../src/libs/useful.js';
module.exports = app => {
    const categoria_tramite = app.src.db.models.categoria_tramite;
    app.route('/categoria_tramites')
        .get((req, res) => {

            if(req.query.type!='json'){
                res.redirect('/error');
            }

            categoria_tramite.findAll().then((categories)=>{

                var arrayCategories=categories.map((category)=>{
                    return {
                        nombre_categoria:category.nombre_categoria_tramite,
                        codigo_categoria:category.id_categoria_tramite,
                        logo_categoria: category.logo_categoria_tramite,
                        descripcion_categoria: category.descripcion_categoria_tramite,
                        tramites:useful.urlBuildListCategoria(req,category)
                    }
                });
                useful.serverResponse(res,arrayCategories,'',req)
            });
        });
};
