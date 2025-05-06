# ETAPA Nº2 

## APLICACIÓN INSCRIPCIONES
En esta segunda etapa procederemos con las opciones 
de inscripción de estudiantes y materias.
Ud. sólo debe programar las clases del modelo.

## ESPECIFICACIONES

**Cl_mEstudiante: un estudiante**
  - El atributo cedula se asignan convirtiendo a número.
  - Los atributos apellido y nombre se asignan con CamelCase.

**Cl_mMateria: una materia**
  - El atributo código se asigna a mayúsculas.
  - El atributo semestre se asigna convirtiendo a número.
  - El atributo nombre se asigna convirtiendo a CamelCase.

**Cl_mEstudiantes y Cl_mMaterias:**
  - Los que están registrados
  - Construyen el array vacío.
  - Los métodos agregar el elemento al final.
  - Los métodos listado retorna un array de objetos de solo datos.

**Cl_mInscripcion: materias del estudiante**
  - El método agregar lo hace al final.
  - El método listado retorna un array de objetos de datos.

**Cl_mInscritos: estudiantes inscritos**
  - El método inscribirMateria agrega la materia al estudiante, o lo crea primero si no existe.
  - El método listado retorna un array de objetos de datos.

**Cl_mSemestre: toda la información**
  - El atributo nombre se asigna a CamelCase.
  - El constructor también construye los objetos atributos.
