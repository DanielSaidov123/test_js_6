import { Passenger } from "./passenger.js";
import { RegularTicket } from "./regularticket.js";
import { VIPTicket } from "./VIPTicket.js";
import { randomInt } from "./random.js";

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
        return new RegularTicket(randomInt(1, 1000), ticket, this.name);
      }
    } else if (typeticket == "VIP") {
      if (flight.regularPrice > this.amountofmoney) {
        return false;
      } else {
        this.amountofmoney -= flight.regularPrice;
        const ticket= new VIPTicket(randomInt(1, 1000), ticket, this.name, [
          "Free alcohol",
          "Free food",
          "Hot towels",
        ]);
        if(flight.Ticketslist.length > flight.Maximumpassengers){ 
          return false
        }
        flight.Ticketslist.push(ticket)
        return ticket
      }
    }
  }
}

