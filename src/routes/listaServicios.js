/**
 * Created by iZel on 1/9/17.
 */
import useful from '../../src/libs/useful.js';
module.exports = app => {
    app.route('/listaServicios')
        .get((req, res) => {
            let listServices=[
                {
                    nombre_servicio:'Busqueda',
                    formato_url:req.protocol + '://' + req.get('host')+'/buscar?busqueda={{ palabra de busqueda }}?type=json',
                    descripcion:'Este servicio realiza una busqueda de las organizaciones y/o tramites que tenga alguna relacion ' +
                    'con el palabra de busqueda, si la variable type tiene como valor la palabra json , esto devolvera un json con ' +
                    'todos los datos de la busqueda. El uso de este api revolvera un objeto con el listado de organizaciones y de trámite',
                    ejemplo:req.protocol + '://' + req.get('host')+'/buscar?busqueda=policia?type=json',
                },
                {
                    nombre_servicio:'Lista Organizaciones',
                    formato_url:req.protocol + '://' + req.get('host')+'/organizaciones/{{ codigo organizacion }}?type=json',
                    descripcion:'Devuelve una lista de organizaciones segun la referencia que tiene con su organizacion superior',
                    ejemplo:req.protocol + '://' + req.get('host')+'/buscar/policia?type=json'
                },

                {
                    nombre_servicio:'Ficha de Organizacion',
                    formato_url:req.protocol + '://' + req.get('host')+'/organizacion/{{ codigo organizacion }}?type=json',
                    descripcion:'Retorna un objeto con los datos de la organizacion segun su código',
                    ejemplo:req.protocol + '://' + req.get('host')+'/organiacion/632?type=json'
                },

                {
                    nombre_servicio:'Categoria Trámites',
                    formato_url:req.protocol + '://' + req.get('host')+'/categoria_tramites?type=json',
                    descripcion:'Retorna un array con todos las categorias de trámites',
                    ejemplo:req.protocol + '://' + req.get('host')+'/categoria_tramites?type=json'
                },

                {
                    nombre_servicio:'Lista de Trámites por Categoría',
                    formato_url:req.protocol + '://' + req.get('host')+'/tramites/{{ codigo_categoria }}?type=json',
                    descripcion:'Devuelve un array con todos los tramites filtrado por categoria de tramite',
                    ejemplo:req.protocol + '://' + req.get('host')+'/tramites/5?type=json'
                },

                {
                    nombre_servicio:'Ficha de Tramites',
                    formato_url:req.protocol + '://' + req.get('host')+'/tramite/{{ codigo tramite }}?type=json',
                    descripcion:'Retorna un objeto con los datos del tramite segun su código',
                    ejemplo:req.protocol + '://' + req.get('host')+'/tramite/38?type=json'
                },

            ];
            useful.serverResponse(res,listServices,'pages/lista_servicios',req);
        });


}