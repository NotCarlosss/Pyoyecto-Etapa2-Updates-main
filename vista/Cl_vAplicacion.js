import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vMateria from "./Cl_vMateria.js";
import Cl_vInscribirMateria from "./Cl_vInscribirMateria.js";
import Cl_vReporteEstudiantes from "./Cl_vReporteEstudiantes.js";
import Cl_vReporteMaterias from "./Cl_vReporteMaterias.js";
export default class Cl_vAplicacion {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("appForm");

    this.vEstudiante = new Cl_vEstudiante();
    this.vReporteEstudiantes = new Cl_vReporteEstudiantes();

    this.vMateria = new Cl_vMateria();
    this.vReporteMaterias = new Cl_vReporteMaterias();

    this.vInscribirMateria = new Cl_vInscribirMateria();

    this.lblLapso = document.getElementById("appForm_lblLapso");
  
    this.btCambiarLapso = document.getElementById("appForm_btCambiarLapso");
    this.btCambiarLapso.onclick = () => this.controlador.cambiarLapso();

    this.btAgregarEstudiante = document.getElementById(
      "appForm_btAgregarEstudiante"
    );
    this.btAgregarEstudiante.onclick = () =>
      this.controlador.activarVista("estudiante");

    this.btReportarEstudiantes = document.getElementById(
      "appForm_btReportarEstudiantes"
    );
    this.btReportarEstudiantes.onclick = () =>
      this.controlador.reportarEstudiantes();

    this.btAgregarMateria = document.getElementById("appForm_btAgregarMateria");
    this.btAgregarMateria.onclick = () =>
      this.controlador.activarVista("materia");

    this.btReportarMaterias = document.getElementById(
      "appForm_btReportarMaterias"
    );
    this.btReportarMaterias.onclick = () => this.controlador.reportarMaterias();

    this.btInscribirMateria = document.getElementById(
      "appForm_btInscribirMateria"
    );
    this.btInscribirMateria.onclick = () =>
      this.controlador.activarVista("inscribirMateria");

    this.tabla = document.getElementById("appForm_tabla");
  }
  set controlador(controlador) {
    this._controlador = controlador;
    if (controlador) {
      this.vEstudiante.iniciar(controlador);
      this.vReporteEstudiantes.iniciar(controlador);
      this.vMateria.iniciar(controlador);
      this.vReporteMaterias.iniciar(controlador);
      this.vInscribirMateria.iniciar(controlador);
    }
  }
  get controlador() {
    return this._controlador;
  }
  reportarEstudiantes({ info }) {
    this.vReporteEstudiantes.reportar({ info });
  }
  reportarMaterias({ info }) {
    this.vReporteMaterias.reportar({ info });
  }
  reportarInscritos({ info }) {
    this.tabla.innerHTML = "";
    info.map((inscripcion) => {
      this.tabla.innerHTML += `<tr>
      <td>${inscripcion.cedula}</td>
      <td>${inscripcion.nombre}</td>
      <td>${inscripcion.cntMaterias}</td>
      <td><button id="appForm_tabla_ver${inscripcion.cedula}">Ver</button></td>
    </tr>`;
    });
  }
}
