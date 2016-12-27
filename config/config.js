require('babel-core/register');


module.exports = {
    "development": {
      "username": "postgres",
      "password": "123456",
      "database": "seq_bd_3",
      "host": "192.168.27.63",
        "dialect": "postgres",
        "pool": {
            "max": 15,
            "min": 0,
            "idle": 10000,
        },
    },
    "test": {
        "username": "root",
        "password": "contrasena",
        "database": "mintrabajo_ovt",
        "host": "localhost",
        "dialect": "postgres",
        "pool": {
            "max": 15,
            "min": 0,
            "idle": 10000,
        },
    },
    "production": {
        "username": "postgres",
        "password": "admin",
        "database": "mintrabajo_ovt",
        "host": "localhost",
        "dialect": "postgres",
        "pool": {
            "max": 15,
            "min": 0,
            "idle": 10000,
        },
    },
};
