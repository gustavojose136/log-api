import { Model } from "sequelize";
import db from ".";
import sequelize from "sequelize";

class User extends Model {
  declare ID: number;
  declare eCPF: string;
  declare Status: string;
  declare Email: string;
  declare Senha: string;
  declare ID_UsuarioCriacao: string;
  declare ID_UsuarioAlteracao: string;
  declare DataCriacao: Date;
  declare DataAlteracao: Date;
  declare DataVencimentoSenha: Date;
  declare UsuarioBloqueado: number;
  declare QtdeTentativaErrada: number;
}

User.init(
  {
    ID: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    eCPF: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Status: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Senha: {
      type: sequelize.STRING,
      allowNull: false,
    },
    ID_UsuarioCriacao: {
      type: sequelize.STRING,
      allowNull: false,
      references: {
        model: "Usuario",
        key: "ID",
      },
    },
    ID_UsuarioAlteracao: {
      type: sequelize.STRING,
      allowNull: false,
      references: {
        model: "Usuario",
        key: "ID",
      },
    },
    DataCriacao: {
      type: sequelize.DATE,
      allowNull: false,
    },
    DataAlteracao: {
      type: sequelize.DATE,
      allowNull: false,
    },
    DataVencimentoSenha: {
      type: sequelize.DATE,
    },
    UsuarioBloqueado: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    QtdeTentativaErrada: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Usuario",
    timestamps: false,
  }
);


export default User;