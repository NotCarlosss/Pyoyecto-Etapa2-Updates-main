import Cl_mMaterias from "./Cl_mMaterias.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import CL_mInscritos from "./CL_mInscritos.js";


export default class Cl_mSemestre{
    constructor({nombre}){
        this.nombre = nombre;
        this.materias = new Cl_mMaterias();
        this.estudiantes = new Cl_mEstudiantes();
        this.inscritos = new CL_mInscritos();
    }
    set nombre(nombre) {
        this._nombre = nombre.toUpperCase();
    }
    get nombre(){
        return this._nombre;
    }
}