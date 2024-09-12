function calculateTax(income, expense) {
  const hotelRent = 2000;
  const mealCost = 5363;
  const staffSalary = 1500;
  const miscellaneous = 525;
  const totalExpanses = hotelRent + mealCost + staffSalary + miscellaneous;

  if (totalExpanses > income) {
    return "Invalid Input";
  }
  const difference = income - totalExpanses;

  const tax = difference * 0.2;

  return tax;
}


function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  const [username, domain] = email.split("@");
  const result = `${username} sent you an email from ${domain}`;
  return result;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let i = 0; i < name.length; i++) {
    if (name[i] >= "0" && name[i] <= "9") {
      return true;
    }
  }
  return false;
}


// 4 no problem 




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