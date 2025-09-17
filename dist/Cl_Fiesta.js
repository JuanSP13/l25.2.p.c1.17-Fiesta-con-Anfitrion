export default class Cl_Fiesta {
    acCervezas;
    acHambur;
    constructor() {
        this.acCervezas = 0;
        this.acHambur = 0;
    }
    procesarInvitado(i) {
        if (i.cervezas > 0) {
            this.acCervezas += i.cervezas;
        }
        if (i.hambur > 0) {
            this.acHambur += i.hambur;
        }
    }
    totalCervezas() {
        return this.acCervezas + 30;
    }
    totalHambur() {
        return this.acHambur + 10;
    }
}
