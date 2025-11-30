
class Restaurante{

    calcularTotal(precio:number,cantiad:number){
        console.log("El total es: "+(precio*cantiad)+"$")
    }

    aplicarDescuento(total:number,descuento:number){
        console.log("El total despues del descuento es: "+(total-(total*descuento/100))+"$")
    }

    calcularPropina(total:number,porcentaje:number){
        console.log("La propina es: "+(total*(porcentaje/100))+"$")
    }



}
const cliente1=new Restaurante();
cliente1.calcularTotal(5.30,6)
const cliente2=new Restaurante();
cliente2.aplicarDescuento(15.9,10)
const cliente3=new Restaurante();
cliente3.calcularPropina(15.9,5)

