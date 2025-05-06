export default class CL_mInscritos {
    constructor() {
        this.inscripcion = [];
    }
    indexEstudiante(cedula) {
        for (let i = 0; i < this.inscripcion.length; i++) {
            if (this.inscripcion[i].cedula === cedula) {
                return i;
            }
        }
        return -1;

    }
    inscribirMateria({ cedula, codigo }) {

        let i = this.indexEstudiante(cedula);
        if (i === -1) {
            this.inscripcion.push({
                cedula,
                materias: [codigo]
            });
        } else {

            let estudiante = this.inscripcion[i];
            if (!estudiante.materias.includes(codigo)) {
                estudiante.materias.push(codigo);
            }
        }
    }

    listado() {
        return this.inscripcion;
    }
}