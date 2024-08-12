interface IUser {
    ID?: string;
    eCPF?: string;
    Status?: string;
    Email?: string;
    Senha?: string;
    ID_UsuarioCriacao?: string;
    ID_UsuarioAlteracao?: string;
    DataCriacao?: Date;
    DataAlteracao?: Date;
    DataVencimentoSenha?: Date;
    UsuarioBloqueado?: number;
    QtdeTentativaErrada?: number;
}

export default IUser;