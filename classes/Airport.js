import { Flight } from "./flight.js";
import { RegularPassenger } from "./regularPerson.js";
import { Student } from "./student.js";

export class Airport {
  Buyingticket() {
    const flay1 = new Flight("vgqa", "fdsf", 33, 100, 100, 200);
    const indexRegular = Math.round(flay1.Maximumpassengers * 0.9);
    const indexVIP = Math.round(flay1.Maximumpassengers * 0.1);

    for (let i = 0; i < indexRegular; i++) {
      const student1 = new Student("ff", 23, 1000, "vewgg");
      const data1 = student1.Purchasingtickets(flay1, "regolar");
      const ticket1 = flay1.createTicketRegular(data1);
      flay1.addtoarr(ticket1);
    }
    for (let i = 0; i < indexVIP; i++) {
      const student1 = new Student("ff", 23, 1000, "vewgg");
      const data1 = student1.Purchasingtickets(flay1, "VIP");
      const ticket1 = flay1.createTicketRegular(data1);
      flay1.addtoarr(ticket1);
    }
    /////////////////////////////////
    
    const flay2 = new Flight("vgqa", "fdsf", 33, 100, 100, 200);
    const indexRegular2 = Math.round(flay2.Maximumpassengers * 0.9);
    const indexVIP2 = Math.round(flay2.Maximumpassengers * 0.1);

    for (let i = 0; i < indexRegular2; i++) {
      const student1 = new Student("ff", 23, 1000, "vewgg");
      const data1 = student1.Purchasingtickets(flay2, "regolar");
      const ticket1 = flay2.createTicketRegular(data1);
      flay2.addtoarr(ticket1);
    }
    for (let i = 0; i < indexVIP2; i++) {
      const student1 = new Student("ff", 23, 1000, "vewgg");
      const data1 = student1.Purchasingtickets(flay2, "VIP");
      const ticket1 = flay2.createTicketVAP(data1);
      flay2.addtoarr(ticket1);
    }
    ///////////////////////////////////
     const flay3 = new Flight("vgqa", "fdsf", 33, 5, 100, 200);
    const indexRegular3 = (Math.round(flay3.Maximumpassengers * 0.9))-1;
    const indexVIP3 = Math.round(flay3.Maximumpassengers * 0.1);

    for (let i = 0; i < indexRegular3; i++) {
      const student1 = new Student("ff", 23, 1000, "vewgg");
      const data1 = student1.Purchasingtickets(flay3, "regolar");
      const ticket1 = flay3.createTicketRegular(data1);
      flay3.addtoarr(ticket1);
    }
    for (let i = 0; i < indexVIP3; i++) {
      const student1 = new Student("ff", 23, 1000, "vewgg");
      const data1 = student1.Purchasingtickets(flay3, "VIP");
      const ticket1 = flay3.createTicketVAP(data1);
      flay3.addtoarr(ticket1);
    }
    console.log(flay3);
     
  }
}
const airport = new Airport();
airport.Buyingticket();

// const flay = new Flight("daniel", "fdsf", 132, 3, 100, 200);
// const student1 = new Student("ff", 23, 1000, "vewgg");
// const student2 = new Student("dani", 23, 1000, "vewgg");
// const regular1 = new RegularPassenger("dani", 23, 1000, "fewfwa", true);
// const regular4 = new RegularPassenger("dani", 23, 1000, "fewfwa", false);
// const data1 = student1.Purchasingtickets(flay, "regolar");
// const dat2 = student2.Purchasingtickets(flay, "VIP");
// const data3 = regular1.Purchasingtickets(flay, "regolar");
// const data4 = regular4.Purchasingtickets(flay, "VIP");

// const ticket1 = flay.createTicketRegular(data1);
// const ticket2 = flay.createTicketRegular(dat2);
// const ticket3= flay.createTicketRegular(data3);
// const ticket4 = flay.createTicketRegular(data4);

// flay.addtoarr(ticket1);
// flay.addtoarr(ticket2);
// flay.addtoarr(ticket3);
// flay.addtoarr(ticket4);

// console.log(flay);
