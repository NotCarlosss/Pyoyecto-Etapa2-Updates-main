export default class Cl_mInscripcion {
    constructor({cedula}){
        this.cedula = cedula;
        this.materias = [];
    }
    agregar(codigo){
        this.materias.push(codigo);
    }
    listado(cl_mMaterias) {
        const materiasInscritas = cl_mMaterias.listado();
        return materiasInscritas.filter(materia => 
            this.materias.includes(materia.codigo)
        );
    }
}
