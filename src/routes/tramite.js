import sequelizeHandlers from "sequelize-handlers";
module.exports = app => {
  const tramite = app.src.db.models.tramite;
  const categoria_tramite = app.src.db.models.categoria_tramite;
  const tramite_categoria_tramite = app.src.db.models.categoria_tramite;
  app.route('/tramites').get((req,res)=>{
      categoria_tramite.findAll({}).then((resultCate)=>{
          res.json({
              categorias:resultCate
          })
      });
  });

    app.route('/tramites/:id_categoria').get((req,res)=>{

        tramite.findAll({
            // include:[
            //     {
            //         model:tramite_categoria_tramite,
            //         required:true,
            //         where:{
            //             id_categoria_tramite:req.params.id_categoria
            //         }
            //     },
            // ]

        }).then((resultTransc)=>{
            categoria_tramite.findAll({}).then((resultCate)=>{
                res.json({
                    categorias:resultCate,
                    tramites:resultTransc
                })
            });
        })
    });

};