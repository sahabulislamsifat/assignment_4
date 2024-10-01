// function calculateTax(income, expense) {
//   const hotelRent = 2000;
//   const mealCost = 5363;
//   const staffSalary = 1500;
//   const miscellaneous = 525;
//   const totalExpanses = hotelRent + mealCost + staffSalary + miscellaneous;

//   if (totalExpanses > income) {
//     return "Invalid Input";
//   }
//   const difference = income - totalExpanses;

//   const tax = difference * 0.2;

//   return tax;
// }

// const result = calculateTax(10000);

function calculateTax(income, expense) {
  if (income < 0 || expense < 0 || income < expense) {
    return "Invalid Input";
  }
  const difference = income - expense;
  const tax = difference * .20;
  return tax
}

const result = calculateTax(5000, 150);
console.log(result);
