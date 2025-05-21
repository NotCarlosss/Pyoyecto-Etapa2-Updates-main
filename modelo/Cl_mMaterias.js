export default class Cl_mMaterias {
    constructor() {
        this.array = [];
    }
    agregar(materia) {
        this.array.push(materia);
    }
    listado() {
        return this.array;
    }
    existe(codigo) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].codigo === codigo) {
                return true;
            }
        }
        return false;
    }
}