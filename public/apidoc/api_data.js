define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "Estado de la API",
    "group": "Estado",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "muestra",
            "description": "<p>un mensaje del estado de la aplicacion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n{\"status\": \"Servicio funcionando\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Estado",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "api/v1/dpas/:codigo",
    "title": "solicita informacion de una DPA con un codigo especifico",
    "name": "DPA",
    "group": "Rest_API_DPA",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "codigo",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "TODO:",
            "description": "<p>esta por verse.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"resultado\": [{},{}]       \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no",
            "description": "<p>existe el datos seleccionado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/dpa.js",
    "groupTitle": "Rest_API_DPA"
  },
  {
    "type": "get",
    "url": "api/v1/dpas",
    "title": "solicita informacion de las DPAs",
    "name": "recupera_DPAS",
    "group": "Rest_API_DPA",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resultado",
            "description": "<p>lista todos los registros de la DPA seleccionada, segun la query disponible.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"resultado\": [{},{}]       \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no",
            "description": "<p>existe el datos seleccionado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/dpa.js",
    "groupTitle": "Rest_API_DPA"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Retorna un token , con cierto cifrado par ala autenticación de peticiones",
    "group": "Seguridad",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "retorna",
            "description": "<p>un jwt</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n{  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Eei3aLL2teePf7aCxTJFUd3sMGpzyqjgqsxx2cgZFIU\"  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/token.js",
    "groupTitle": "Seguridad",
    "name": "Post"
  },
  {
    "type": "get",
    "url": "web/dpas",
    "title": "visualiza los datos especificos de DPA y los renderiza en una pagina HTML",
    "name": "api_DPA_con_condigo",
    "group": "web_DPA",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "codigo",
            "optional": false,
            "field": "el",
            "description": "<p>codigo del DPA(ex codigo INE).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "TODO:",
            "description": "<p>esta por verse.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"resultado\": [{},{}]       \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no",
            "description": "<p>existe el datos seleccionado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/dpa.js",
    "groupTitle": "web_DPA"
  },
  {
    "type": "get",
    "url": "web/dpas",
    "title": "lista todos los DPAS y los renderina en una pagina HTML",
    "name": "lista_todos_los_DPA",
    "group": "web_DPA",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "codigo",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "resultado",
            "description": "<p>lista todos los registros de la DPA seleccionada, segun la query disponible.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"resultado\": [{},{}]       \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no",
            "description": "<p>existe el datos seleccionado</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/dpa.js",
    "groupTitle": "web_DPA"
  }
] });