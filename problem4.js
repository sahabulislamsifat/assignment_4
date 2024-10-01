function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    !("name" in obj) ||
    !("testScore" in obj) ||
    !("schoolGrade" in obj) ||
    !("isFFamily" in obj)
  ) {
    return "invalid Input";
  }

  const { name, testScore, schoolGrade, isFFamily } = obj;

  if (
    typeof name !== "string" ||
    typeof testScore !== "number" ||
    typeof schoolGrade !== "number" ||
    typeof isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  if (testScore <= 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
    return "invalid Input";
  }
  let finalScore = testScore + schoolGrade;
  if (isFFamily) {
    finalScore += 20;
  }
  return finalScore >= 80;
}

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 45,
//     schoolGrade: 25,
//     isFFamily: false,
//   })
// ); // false

// console.log(calculateFinalScore("hello"));

// console.log(
//   calculateFinalScore({
//     name: "Rajib",
//     testScore: 15,
//     schoolGrade: 25,
//     isFFamily: true,
//   })
// );

function calculateFinalScore(data) {
  if (typeof data !== "object") {
    return "Invalid Input";
  }
  const familyScore = data.isFFamily ? 20 : 0;

  const totalScore = data.testScore + data.schoolGrade + familyScore;

  return  totalScore >= 80;;
}
