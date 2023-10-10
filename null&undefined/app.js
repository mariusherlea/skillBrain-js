let visitors = [];

const createVisitor = (visitorName, visitoAge, ticketId) => {
  let visitor = {};
  visitor.name = visitorName;
  (visitor.age = visitoAge), (visitor.ticketId = ticketId);
  visitors.push(visitor);
  console.log(visitors);
};
createVisitor("Marius", 46, "H32AZ123");
createVisitor("Ion", 43, "H32AA423");

const revokeTicket = (visitorName) => {
  for (i of visitors) {
    if (i.name === visitorName) {
      i.ticketId = null;
    }
  }
  console.log(visitors);
};
revokeTicket("Marius");
revokeTicket("Vasile");
