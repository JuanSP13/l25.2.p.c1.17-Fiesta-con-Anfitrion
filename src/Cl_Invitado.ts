export default class Cl_Invitado{
    private _nombre: string;
    private _cervezas: number;
    private _hambur: number;

    constructor(nombre: string, cervezas: number, hambur: number){
        this._nombre = nombre;
        this._cervezas = cervezas;
        this._hambur = hambur;
    }

    public set nombre(n:string) {
        this._nombre = n;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set cervezas(c:number) {
        this._cervezas = c;
    }

    public get cervezas(): number {
        return this._cervezas;
    }

    public set hambur(h:number) {
        this._hambur = h;
    }

    public get hambur(): number {
        return this._hambur;
    }

    totalProductos(): number {
        return this.cervezas + this.hambur;
    }
}