/**
 * Created by iZel on 12/31/16.
 */

import config from './config.development.js'

module.exports={
    serverResponse:(res,obj,view)=>{
        if(config.jsonResponse==true){
            res.json(obj)
        }else{
            res.render(view,obj)
        }
    }
};