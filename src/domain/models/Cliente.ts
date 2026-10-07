

import { v4 } from "uuid";



export class Cliente{
    
    private _id: string;
    private _nombre: string;
    private _contacto: string;

    constructor(nombre: string, contacto: string) {
        this._id = v4();
        this._nombre = nombre;
        this._contacto = contacto;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get contacto(): string {
        return this._contacto;
    }

    set contacto(contacto: string) {
        this._contacto = contacto;
    }
}