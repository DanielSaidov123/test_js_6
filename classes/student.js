import { Passenger } from "./passenger.js";

export class Student extends Passenger {
  constructor(name, IDnumber, amountofmoney, school) {
    super(name, IDnumber, amountofmoney);
    this.school = school;
  }

  Purchasingtickets(flight, typeticket) {
    if (typeticket == "regolar") {
      const ticket = flight.regularPrice * 0.9;
      if (ticket > this.amountofmoney) {
        return false;
      } else {
        this.amountofmoney -= flight.regularPrice * 0.9;
        return  [ticket,this.name]
      }
    } else if (typeticket == "VIP") {
      if (flight.regularPrice > this.amountofmoney) {
        return false;
      } else {
        this.amountofmoney -= flight.regularPrice;

        if (flight.Ticketslist.length > flight.Maximumpassengers) {
          return false;
        }
        return [flight.VIPprice,this.name];
      }
    }
  }
}
