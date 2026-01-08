import { randomInt } from "./random.js";
import { VIPTicket } from "./VIPTicket.js";

export class Flight {
  constructor(
    name,
    airline,
    numberFlight,
    Maximumpassengers,
    regularPrice,
    VIPprice,
    Ticketslist
  ) {
    this.name = name;
    this.airline = airline;
    this.numberFlight = numberFlight;
    this.Maximumpassengers = Maximumpassengers;
    this.regularPrice = regularPrice;
    this.VIPprice = VIPprice;
    this.Ticketslist = Ticketslist;
  }
  createTicketVAP(ticket, name) {
    return new VIPTicket(randomInt(1, 1000), ticket, name, [
      "Free alcohol",
      "Free food",
      "Hot towels",
    ]);
  }
  createTicketRegular(ticket, name) {
    return new VIPTicket(randomInt(1, 1000), ticket,name);
  }
}
