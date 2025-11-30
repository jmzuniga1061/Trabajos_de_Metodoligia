
class Auto{

    Acelerar(velocidadActual:number,incremnto:number){
        console.log("La velociadad despues de acelerar es:"+(velocidadActual+incremnto)+"km/h");
    }

    Frenar(velocidadActual:number,decremento:number){
        console.log("La velociada despues de frenar es :"+(velocidadActual-decremento)+"km/h");
       
    }

    Recorrer(distancia:number, tiempo:number){
        console.log("La velocidad media es"+(distancia/tiempo)+"km/h");
    }


}





  const auto1= new Auto();
  console.log(auto1.Acelerar(60,20))
  
  const auto2= new Auto();
  console.log(auto2.Frenar(50,20))
    const auto3= new Auto();
  console.log(auto3.Recorrer(1000,10))
