"use strict";
require("dotenv/config");

const config = {
    username: "LogTeste",
    password: "15Dev",
    database: "DadosTeste",
    host: "127.0.0.1",
    dialect: "mssql",
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }
    },
    define: {
        timestamps: true,
        underscored: true,
    },
};

module.exports = config;
