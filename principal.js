import Cl_mSemestre from "./modelo/Cl_mSemestre.js";
import Cl_vAplicacion from "./vista/Cl_vAplicacion.js";
import Cl_controlador from "./Cl_controlador.js";
import dataEstudiantes from "./data/dataEstudiantes.js";
import dataMaterias from "./data/dataMaterias.js";
import dataInscritos from "./data/dataInscritos.js";

export default class Cl_principal {
  constructor() {
    let vistaApp = new Cl_vAplicacion();
    let mSemestre = new Cl_mSemestre({ nombre: "Primero" });
    dataEstudiantes.forEach((estudiante) =>
      mSemestre.estudiantes.agregar(estudiante)
    );
    dataMaterias.forEach((materia) => mSemestre.materias.agregar(materia));
    dataInscritos.forEach((inscripcion) => mSemestre.inscritos.inscribirMateria(inscripcion));
    let controlador = new Cl_controlador({
      mSemestre: mSemestre,
      vistaApp: vistaApp,
    });
    vistaApp.controlador = controlador;
    controlador.activarVista("main");
  }
}
