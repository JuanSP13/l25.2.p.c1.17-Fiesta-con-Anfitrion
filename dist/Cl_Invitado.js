export default class Cl_Invitado {
    _nombre;
    _cervezas;
    _hambur;
    constructor(nombre, cervezas, hambur) {
        this._nombre = nombre;
        this._cervezas = cervezas;
        this._hambur = hambur;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set cervezas(c) {
        this._cervezas = c;
    }
    get cervezas() {
        return this._cervezas;
    }
    set hambur(h) {
        this._hambur = h;
    }
    get hambur() {
        return this._hambur;
    }
    totalProductos() {
        return this.cervezas + this.hambur;
    }
}
