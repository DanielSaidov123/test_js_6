import assert from "assert";
import { test } from "node:test";
import { Student } from "./classes/student.js";
import { Flight } from "./classes/flight.js";
import { RegularPassenger } from "./classes/regularPerson.js";

test(" TESTING Class", () => {
  const flay = new Flight("daniel", "fdsf", 132, 3, 100, 200);
  const student1 = new Student("ff", 23, 1, "vewgg");
  assert.strictEqual(student1.Purchasingtickets(flay, "VIP"), false);
});
test(" TESTING Class", () => {
  const flay = new Flight("daniel", "fdsf", 132, 3, 100, 200);
  const student1 = new Student("ff", 23, 1000, "vewgg");
  const ticket = student1.Purchasingtickets(flay, "regolar");
  assert.deepStrictEqual(ticket, [90, "ff"]);
});
test(" TESTING Class", () => {
  const flay = new Flight("daniel", "fdsf", 132, 3, 100, 200);
  const student1 = new Student("ff", 23, 1000, "vewgg");
  const ticket = student1.Purchasingtickets(flay, "VIP");
  assert.deepStrictEqual(ticket, [200, "ff"]);
});
test(" TESTING Class", () => {
  const flay = new Flight("daniel", "fdsf", 132, 3, 100, 200);
  const regular = new RegularPassenger("ff", 23, 1000, "vewgg", true);
  const ticket = regular.Purchasingtickets(flay, "VIP");
  assert.deepStrictEqual(ticket, [85, "ff"]);
});
test(" TESTING Class", () => {
  const flay = new Flight("daniel", "fdsf", 132, 3, 100, 200);
  const regular = new RegularPassenger("ff", 23, 1000, "vewgg", true);
  const ticket = regular.Purchasingtickets(flay, "regolar");
  assert.deepStrictEqual(ticket, [80, "ff"]);
});
test(" TESTING Class", () => {
  const flay = new Flight("daniel", "fdsf", 132, 3, 100, 200);
  const regular = new RegularPassenger("ff", 23, 1, "vewgg", true);
  const ticket = regular.Purchasingtickets(flay, "regolar");
  assert.deepStrictEqual(ticket, false);
});
