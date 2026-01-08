import { Ticket } from "./ticket.js";
export class VIPTicket extends Ticket {
  constructor(Randomticketnumber, Price, Ownername, Benefitslist) {
    super(Randomticketnumber, Price, Ownername);
    this.Benefitslist = Benefitslist;
  }
}

const c = new VIPTicket(1, 2, "fds",["fdsf"]);
console.log(c);
