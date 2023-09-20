let frontDoorPassword = "";
let backDoorPassword = "";
const frontDoorResponse = (line) => {
  frontDoorPassword = frontDoorPassword + line[0];
  backDoorPassword = backDoorPassword + line[line.length - 1];
  return backDoorPassword, frontDoorPassword;
};

frontDoorResponse("Stands so high");
frontDoorResponse("Huge hooves too");
frontDoorResponse("Impatiently waits for");
frontDoorResponse("Reins and harness");
frontDoorResponse("Eager to leave");

const frontDoorPasswordCase = (frontDoorPassword) => {
  return (
    frontDoorPassword[0].toUpperCase() +
    frontDoorPassword.slice(1).toLowerCase()
  );
};

// console.log(frontDoorfrontDoorPassword(frontDoorPassword));

console.log(frontDoorPasswordCase(frontDoorPassword));

console.log(frontDoorPasswordCase(backDoorPassword) + ", " + "please");
