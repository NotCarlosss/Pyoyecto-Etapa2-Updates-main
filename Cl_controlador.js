export default class Cl_controlador {
  constructor({ mSemestre, vistaApp }) {
    this.mSemestre = mSemestre;
    this.vistaApp = vistaApp;
  }
  activarVista(vista) {
    if (vista === "main") {
      this.vistaApp.reportarInscritos({
        info: this.mSemestre.inscritos.listado(this.mSemestre.estudiantes.array),
      });
      this.vistaApp.lblLapso.innerHTML = this.mSemestre.nombre;
    }
    this.vistaApp.vista.hidden = vista !== "main";
    this.vistaApp.vEstudiante.vista.hidden = vista !== "estudiante";
    this.vistaApp.vMateria.vista.hidden = vista !== "materia";
    this.vistaApp.vReporteEstudiantes.vista.hidden =
      vista !== "reporteEstudiantes";
    this.vistaApp.vReporteMaterias.vista.hidden = vista !== "reporteMaterias";
    this.vistaApp.vInscribirMateria.vista.hidden = vista !== "inscribirMateria";
  }
  cambiarLapso() {
    let nombre = prompt("Nombre del lapso académico:", this.mSemestre.nombre);
    if (nombre) {
      this.mSemestre.nombre = nombre;
      this.activarVista("main");
    }
  }
  agregarEstudiante() {
    this.mSemestre.estudiantes.agregar(
      this.vistaApp.vEstudiante.dataEstudiante()
    );
  }
  agregarMateria() {
    this.mSemestre.materias.agregar(this.vistaApp.vMateria.dataMateria());
  }
  agregarInscripcion() {
    let data = this.vistaApp.vInscribirMateria.dataInscripcion();
    if (
      this.mSemestre.estudiantes.existe(data.cedula) &&
      this.mSemestre.materias.existe(data.codigo)
    )
      this.mSemestre.inscritos.inscribirMateria(data);
    else alert("No se pudo inscribir el estudiante");
  }
  reportarEstudiantes() {
    this.vistaApp.reportarEstudiantes({
      info: this.mSemestre.estudiantes.listado(),
    });
  }
  reportarMaterias() {
    this.vistaApp.reportarMaterias({
      info: this.mSemestre.materias.listado(),
    });
  }
}
