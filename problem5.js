function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalTime = 0;
  for (let i = 0; i < waitingTimes.length; i++) {
    totalTime = totalTime + waitingTimes[i];
  }

  let averageInterviewTime = Math.round(totalTime / waitingTimes.length);
  const beforIsrat = serialNumber - 1;
  const totalBeforIsrat = beforIsrat - waitingTimes.length;

  return totalBeforIsrat <= 0 ? 0 : totalBeforIsrat * averageInterviewTime;
}
console.log(waitingTime([6], "4"));
