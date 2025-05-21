export default class CL_mInscritos {
    constructor() {
        this.array = [];
    }
    indexEstudiante(cedula) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].cedula === cedula) {
                return i;
            }
        }
        return -1;

    }
    inscribirMateria({ cedula, codigo }) {

        let i = this.indexEstudiante(cedula);
        if (i === -1) {
            this.array.push({
                cedula,
                materias: [codigo]
            });
        } else {

            let estudiante = this.array[i];
            if (!estudiante.materias.includes(codigo)) {
                estudiante.materias.push(codigo);
            }
        }
    }

    listado(estudiantes) {
        let inscritos = this.array;
        if (!inscritos || inscritos.length === 0) {
          return null;
        }
      
        const datosInscritos = inscritos.map(inscrito => {
          const estudianteEncontrado = estudiantes.find(estudiante => estudiante.cedula === inscrito.cedula);
          if (estudianteEncontrado) {
            return {
              cedula: estudianteEncontrado.cedula,
              nombre: estudianteEncontrado.nombre + " " + estudianteEncontrado.apellido,
              cntMaterias: inscrito.materias.length,
            };
          }
          return null; // Si no se encuentra el estudiante (algo inesperado)
        }).filter(datos => datos !== null); // Filtra los posibles null en caso de no encontrar estudiante
      
        return datosInscritos.length > 0 ? datosInscritos : null;
      }
}

