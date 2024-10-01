// function waitingTime(waitingTimes, serialNumber) {
//   if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
//     return "Invalid Input";
//   }

//   let totalTime = 0;
//   for (let i = 0; i < waitingTimes.length; i++) {
//     totalTime = totalTime + waitingTimes[i];
//   }

//   let averageInterviewTime = Math.round(totalTime / waitingTimes.length);
//   const beforIsrat = serialNumber - 1;
//   const totalBeforIsrat = beforIsrat - waitingTimes.length;

//   return totalBeforIsrat <= 0 ? 0 : totalBeforIsrat * averageInterviewTime;
// }
// console.log(waitingTime([6], "4"));

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalWaitingTime = 0;
  for (const time of waitingTimes) totalWaitingTime += time;
  const averageInterviewTime = Math.round(
    totalWaitingTime / waitingTimes.length
  );

  const serialNumberBeforeIsrat = serialNumber - 1;
  const serialLeft = serialNumberBeforeIsrat - waitingTimes.length;
  const timeIsratWillWait = averageInterviewTime * serialLeft;
  
  return timeIsratWillWait;
}
console.log(waitingTime([6], 4));
