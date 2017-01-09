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
        let isJson=req.query.type=='json'?'?type=json':'';
        // return  req.protocol + '://' + req.get('host') + '/organizacion/' + organizacionItem.tipo_organizacion.url_tipo_organizacion + '/' + organizacionItem.id_organizacion
        return  req.protocol + '://' + req.get('host') + '/organizacion/' + organizacionItem.url_organizacion + '/' + organizacionItem.id_organizacion+isJson
    },

    urlBuildListOrganizacion : (req,organizacionItem) => {
        let isJson=req.query.type=='json'?'?type=json':'';
        return req.protocol + '://' + req.get('host') + '/organizaciones/' + organizacionItem.id_organizacion+isJson
    },

    urlBuildViewTramite :  (req, transcData,key='id_tramite') => {
        let isJson=req.query.type=='json'?'?type=json':'';
        return req.protocol + '://' + req.get('host') +'/tramite/'+transcData[key]+isJson
    },

    urlBuildListCategoria: (req, category) => {
        let isJson=req.query.type=='json'?'?type=json':'';
        return req.protocol + '://' + req.get('host') +'/tramites/'+category.id_categoria_tramite+'/'+category.url_categoria_tramite+isJson
    }
};