export default class Cl_vInscribirMateria {
  constructor() {
    this.controlador = null;
    this.vista = document.getElementById("inscripcionForm");
    this.vista.hidden = true;

    this.inCedula = document.getElementById("inscripcionForm_inCedula");
    this.inCodigo = document.getElementById("inscripcionForm_inCodigo");

    this.btAceptar = document.getElementById("inscripcionForm_btAceptar");
    this.btAceptar.onclick = () => {
      this.controlador.agregarInscripcion();
      this.controlador.activarVista("main");
    };

    this.btCancelar = document.getElementById("inscripcionForm_btCancelar");
    this.btCancelar.onclick = () => {
      this.controlador.activarVista("main");
    };
  }
  get cedula() {
    return +this.inCedula.value;
  }
  get codigo() {
    return this.inCodigo.value.toUpperCase();
  }
  iniciar(controlador) {
    this.controlador = controlador;
  }
  dataInscripcion() {
    return {
      cedula: this.cedula,
      codigo: this.codigo
    }
  }
}
