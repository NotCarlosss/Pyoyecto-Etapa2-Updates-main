export default class Cl_mEstudiantes{
    constructor(){
        this.estudiantes = []
    }
    agregar(estudiante){
        this.estudiantes.push(estudiante);
    }
    listado(){
        return this.estudiantes;
    }
    existe(cedula){
        for(let i=0;i<this.estudiantes.length;i++){
            if(this.estudiantes[i].cedula===cedula){
                return true;
            }
        }
        return false;
    }
   
    
}