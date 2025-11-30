
class banco{
  depositar(saldo:number,monto :number){
    if (monto <= 0 ){
        console.log("El monto a depositar debe ser mayor a 0 ")
    }else{
        return saldo + monto 
    } 
  }
  retirar(saldo:number,monto:number){
    if(monto > saldo){
        console.log("Fondos Insuficientes ")
    }else{
        return  saldo - monto 
    }
  }
  Transferir(saldoOrigen:number,monto:number){
    if(monto > saldoOrigen){
        console.log("No se puede transferir mas del saldo disponible" )
    }else{
        return saldoOrigen- monto
    }
  }
   
}
    const user1= new banco();
    
    console.log("Saldo posterios al Deposito: "+ user1.depositar(500,20)) //Deposito

    const user2= new banco();
    console.log("Saldo posterior al Retiro: "+user2.retirar(500,80))//Retiro 

    const user3= new banco();
    console.log("Saldo posterior a la Transferencia: "+user3.Transferir(500,180))//Trasferencia 