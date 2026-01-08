import { RegularTicket } from "./regularticket.js";
import { VIPTicket } from "./VIPTicket.js";

export class Flight {
  constructor(
    name,
    airline,
    numberFlight,
    Maximumpassengers,
    regularPrice,
    VIPprice
  ) {
    this.name = name;
    this.airline = airline;
    this.numberFlight = numberFlight;
    this.Maximumpassengers = Maximumpassengers;
    this.regularPrice = regularPrice;
    this.VIPprice = VIPprice;
    this.Ticketslist =  [];
  }
  createTicketVAP( arr) {
    return new VIPTicket(crypto.randomUUID(), arr[0], arr[1], ["Free alcohol","Free food","Hot towels"]);
  }
  createTicketRegular(arr) {
    return new RegularTicket(crypto.randomUUID(),arr[0], arr[1]);
  }
  addtoarr(data){
    this.Ticketslist.push(data)
  }
}
