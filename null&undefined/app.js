let visitors = [];

const createVisitor = (visitorName, visitoAge, ticketId) => {
  let visitor = {};
  visitor.name = visitorName;
  (visitor.age = visitoAge), (visitor.ticketId = ticketId);
  visitors.push(visitor);
  console.log(visitors);
};
// createVisitor("Marius", 46, "H32AZ123");
// createVisitor("Ion", 43, "H32AA423");

const revokeTicket = (visitorName) => {
  for (i of visitors) {
    if (i.name === visitorName) i.ticketId = null;
  }
  console.log(visitors);
};
// revokeTicket("Marius");
// revokeTicket("Vasile");

const ticketStatus = (tracker, ticketId) => {
  for (let i of tracker) {
    switch (i.ticketId) {
      case null:
        continue;
      case ticketId:
        return i;
      default:
        return "Invalid";
    }
  }
};
// console.log(ticketStatus(visitors, "H32AA423"));
const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};

const visitorOld = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

const gtcVersion = (visitorNew) => {
  if (visitorNew.hasOwnProperty("gtc")) return visitorNew.gtc.version;
  else return undefined;
};
// console.log(gtcVersion(visitorNew));
