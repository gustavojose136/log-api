interface IUser {
    ID?: string;
    Nome?: string;
    Email?: string;
    Senha?: string;
    Cpf?: string;
    ID_UsuarioCriacao?: string;
    ID_UsuarioAlteracao?: string;
    DataCriacao?: Date;
    DataAlteracao?: Date;
    DataVencimentoSenha?: Date;
    UsuarioBloqueado?: number;
    QtdeTentativaErrada?: number;
}

export default IUser;