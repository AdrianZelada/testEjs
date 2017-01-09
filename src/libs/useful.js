/**
 * Created by iZel on 12/31/16.
 */

import config from './config.development.js';
import os from 'os';

module.exports={
    serverResponse:(res,obj,view,req)=>{
        if(config.jsonResponse==true || req.query.type=='json'){
            res.json(obj)
        }else{
            res.render(view,obj)
        }
    },

    urlBuildViewOrganizacion : (req,organizacionItem) => {
        return  req.protocol + '://' + req.get('host') + '/organizacion/' + organizacionItem.tipo_organizacion.url_tipo_organizacion + '/' + organizacionItem.id_organizacion
    },

    urlBuildListOrganizacion : (req,organizacionItem) => {
        return req.protocol + '://' + req.get('host') + '/organizaciones/' + organizacionItem.id_organizacion
    },

    urlBuildViewTramite :  (req, transcData) => {
        return req.protocol + '://' + req.get('host') +'/tramite/'+transcData.id_tramite
    },

    urlBuildListCategoria: (req, category) => {
        return req.protocol + '://' + req.get('host') +'/tramites/'+category.id_categoria_tramite+'/'+category.url_categoria_tramite
    }
};