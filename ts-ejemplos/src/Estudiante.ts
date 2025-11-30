
class Estudiante{
    
    
    agregarNota(promedio:number,nuevaNota:number){
       return (promedio + nuevaNota)/2
    }
   
   
    aprobar(nota:number,minima:number){
       
       minima=70
        if(nota >= minima){
            return true 
        }else{
            return false
        }
    }
    calcularFaltas(faltasActuales:number, nuevasfaltas:number){
        return faltasActuales+nuevasfaltas
    }

}

const alumno1=new Estudiante();
console.log("EL promedio es: "+alumno1.agregarNota(8.3,7))
const alumno2=new Estudiante();
console.log("EL alumno aprobo?: "+alumno2.aprobar(7.5,7))
const alumno3=new Estudiante();
console.log("El total de faltas es: "+alumno3.calcularFaltas(3,1))