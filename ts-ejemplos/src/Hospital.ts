

class Hospital{
    calcularDosis(peso:number,mgPorKg:number){
        console.log("La dosis es:"+(peso*mgPorKg)+".mg")
    }

    calcularIMC(peso:number,altura:number){
        console.log("EL valor de indice de masa corporal es: "+(peso/(altura*altura))+".gr")
    }

    RegistarVisitas(visitasActuales:number,nuevas:number){
        console.log("El total de visitas es: "+(visitasActuales+nuevas)+" visitas ")
    }

}

const paciente1= new Hospital();
paciente1.calcularDosis(54,2)
const paciente2= new Hospital();
paciente2.calcularIMC(54,1.54)
const paciente3= new Hospital();
paciente3.RegistarVisitas(15,8)