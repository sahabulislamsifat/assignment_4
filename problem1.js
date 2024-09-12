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

const result = calculateTax(5000);
console.log(result);
