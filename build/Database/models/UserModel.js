"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class User extends sequelize_1.Model {
}
User.init({
    ID: {
        type: sequelize_2.default.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    Nome: {
        type: sequelize_2.default.STRING,
        allowNull: false,
    },
    Email: {
        type: sequelize_2.default.STRING,
        allowNull: false,
    },
    Senha: {
        type: sequelize_2.default.STRING,
        allowNull: false,
    },
    Cpf: {
        type: sequelize_2.default.STRING,
        allowNull: false,
    },
    ID_UsuarioCriacao: {
        type: sequelize_2.default.STRING,
        allowNull: false,
        references: {
            model: "Usuario",
            key: "ID",
        },
    },
    ID_UsuarioAlteracao: {
        type: sequelize_2.default.STRING,
        allowNull: false,
        references: {
            model: "Usuario",
            key: "ID",
        },
    },
    DataCriacao: {
        type: sequelize_2.default.DATE,
        allowNull: false,
    },
    DataAlteracao: {
        type: sequelize_2.default.DATE,
        allowNull: false,
    },
    DataVencimentoSenha: {
        type: sequelize_2.default.DATE,
    },
    UsuarioBloqueado: {
        type: sequelize_2.default.INTEGER,
        allowNull: false,
    },
    QtdeTentativaErrada: {
        type: sequelize_2.default.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    tableName: "Usuario",
    timestamps: false,
});
exports.default = User;
