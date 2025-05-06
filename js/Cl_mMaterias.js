export default class Cl_mMaterias {
    constructor() {
        this.materias = [];
    }
    agregar(materia) {
        this.materias.push(materia);
    }
    listado() {
        return this.materias;
    }
    existe(codigo) {
        for (let i = 0; i < this.materias.length; i++) {
            if (this.materias[i].codigo === codigo) {
                return true;
            }
        }
        return false;
    }
}