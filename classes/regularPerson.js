import { Passenger } from "./passenger.js";

export class RegularPassenger extends Passenger {
  constructor(name, IDnumber, amountofmoney, Workplace, knowsemployee) {
    super(name, IDnumber, amountofmoney);
    this.Workplace = Workplace;
    this.knowsemployee = knowsemployee;
  }


  Purchasingtickets(flight,typeticket) {
    if(this.amountofmoney <flight.regularPrice){ 
      return false
    }
    if(this.knowsemployee){
      if(typeticket== 'regolar'){
        this.amountofmoney -= flight.regularPrice * 0.8;
        return [(flight.regularPrice)*0.8,this.name]
       }
       else if(typeticket== 'VIP'){ 
        this.amountofmoney -= flight.regularPrice * 0.85;
        return [(flight.regularPrice)*0.85,this.name]
       }
     }
     else{
      this.amountofmoney -= flight.regularPrice ;
      return [(flight.regularPrice) ,this.name]
     }
  }
}
