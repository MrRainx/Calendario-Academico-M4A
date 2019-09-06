import { Persona } from './Persona';
import { Errors } from './Errors';
export interface UserWeb extends Errors {

    username?: string
    password?: string
    persona?: Persona

}