export default class Cl_mEstudiantes{
    constructor(){
        this.array = []
    }
    agregar(estudiante){
        this.array.push(estudiante);
    }
    listado(){
        return this.array;
    }
    existe(cedula){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i].cedula===cedula){
                return true;
            }
        }
        return false;
    }
   
    
}