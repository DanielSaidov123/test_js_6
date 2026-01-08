import { Flight } from "./flight.js";
import { RegularPassenger } from "./regularPerson.js";
import { Student } from "./student.js";

export class Airport {
  Buyingticket(data) {
    const flay1 = new Flight("vgqa", "fdsf", 33, 3, 100, 200);
    const flay2 = new Flight("vewqav", "fdsf", 24321, 3, 100, 200);
    const flay3 = new Flight("danivel", "fdsf", 132, 3, 100, 200);
    
  }
}
const airport = new Airport();



const flay = new Flight("daniel", "fdsf", 132, 3, 100, 200);
const student1 = new Student("ff", 23, 1000, "vewgg");
const student2 = new Student("dani", 23, 1000, "vewgg");
const regular1 = new RegularPassenger("dani", 23, 1000, "fewfwa", true);
const regular4 = new RegularPassenger("dani", 23, 1000, "fewfwa", false);
const data1 = student1.Purchasingtickets(flay, "regolar");
const dat2 = student2.Purchasingtickets(flay, "VIP");
const data3 = regular1.Purchasingtickets(flay, "regolar");
const data4 = regular4.Purchasingtickets(flay, "VIP");


const ticket1 = flay.createTicketRegular(data1);
const ticket2 = flay.createTicketRegular(dat2);
const ticket3= flay.createTicketRegular(data3);
const ticket4 = flay.createTicketRegular(data4);

flay.addtoarr(ticket1);
flay.addtoarr(ticket2);
flay.addtoarr(ticket3);
flay.addtoarr(ticket4);

console.log(flay);
