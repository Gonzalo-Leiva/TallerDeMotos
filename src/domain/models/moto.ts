export interface IMoto{

    modelo: string;
    marca: string;
    cilindrada: number;
    km: number;
}

export class Moto {
  
    private _modelo: string;
    private _marca: string;
    private _cilindrada: number;
    private _km: number;


    
    constructor(modelo: string, marca: string, cilindrada: number, km: number) {
        
        this._modelo = modelo;
        this._marca = marca;
        this._cilindrada = cilindrada;
    
        this._km = km;
    }



    get modelo(): string {
        return this._modelo;
    }

    set modelo(modelo: string) {
        this._modelo = modelo;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(marca: string) {
        this._marca = marca;
    }

    get cilindrada(): number {
        return this._cilindrada;
    }

    set cilindrada(cilindrada: number) {
        this._cilindrada = cilindrada;
    }

    get km(): number {
        return this._km;
    }
    
    set km(km: number) {
        this._km = km;
    }




}