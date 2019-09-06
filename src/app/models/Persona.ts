import { Errors } from './Errors';

export interface Persona extends Errors {
    id?: number
    Foto?: string
    identificacion?: string
    primerApellido?: string
    segundoApellido?: string
    primerNombre?: string
    segundoNombre?: string
    genero?: string
    sexo?: string
    estadoCivil?: string
    etnia?: string
    idiomaRaiz?: string
    tipoSangre?: string
    telefono?: string
    celular?: string
    correo?: string
    fechaRegistro?: Date;
    discapacidad?: boolean
    tipoDiscapacidad?: string
    porcentaDiscapacidad?: number
    carnetConadis?: string
    callePrincipal?: string
    numeroCasa?: string
    calleSecundaria?: string
    referencia?: string
    sector?: string
    idioma?: string
    tipoResidencia?: string
    fechaNacimiento?: Date
    activa?: boolean
    categoriaMigratoria?: string

}