birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
totalBirdCount = (birdsPerDay) => {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }

  return sum;
};

birdsInWeek = (birdsPerDay, weekNumber) => {
  let sumInWeek = 0;
  if (weekNumber === 1) {
    for (let i = 0; i <= 6; i++) {
      sumInWeek += birdsPerDay[i];
    }
  } else if (weekNumber === 2) {
    for (let i = 7; i <= 13; i++) {
      sumInWeek += birdsPerDay[i];
    }
  } else return null;
  return sumInWeek;
};
// console.log(totalBirdCount(birdsPerDay));
// console.log(birdsInWeek(birdsPerDay, 2));

birdsPerDay2 = [2, 5, 0, 7, 4, 1];
fixBirdCountLog = (birdsPerDay) => {
  let fixedArray = [...birdsPerDay];
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      fixedArray[i] += 1;
    }
  }
  return fixedArray;
};
console.log(fixBirdCountLog(birdsPerDay2));
