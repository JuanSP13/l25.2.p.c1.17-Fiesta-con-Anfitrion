import Cl_Invitado from "./Cl_Invitado";

export default class Cl_Fiesta{

    private acCervezas: number;
    private acHambur: number;

    constructor() {
        this.acCervezas = 0;
        this.acHambur = 0;
    }

    procesarInvitado(i: Cl_Invitado) {
        if (i.cervezas > 0) {
            this.acCervezas += i.cervezas;}

        if (i.hambur > 0) {
            this.acHambur += i.hambur;}
    }

    totalCervezas(): number {
        return this.acCervezas+30;
    }

    totalHambur(): number {
        return this.acHambur+10;
    }
}