import { Passenger } from "./passenger.js";

export class RegularPassenger extends Passenger {
  constructor(name, IDnumber, amountofmoney, Workplace, knowsemployee) {
    super(name, IDnumber, amountofmoney);
    this.Workplace = Workplace;
    this.knowsemployee = knowsemployee;
  }
  Purchasingtickets(flight, typeticket) {
    
  }
}
